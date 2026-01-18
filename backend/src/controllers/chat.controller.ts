import { Request, Response } from 'express';
import axios from 'axios';

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { message, conversationHistory } = req.body;
        const userId = (req as any).user?.userId;

        console.log('[Chat] Received message:', { message, userId, historyLength: conversationHistory?.length });

        if (!message || typeof message !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Message is required',
            });
        }

        if (!process.env.OPENROUTER_API_KEY) {
            console.error('[Chat] OPENROUTER_API_KEY not found');
            return res.status(500).json({
                success: false,
                message: 'OpenRouter API key not configured',
            });
        }

        const systemPrompt = `You are SkillXIntell AI Assistant, specialized in career guidance, skill development, and professional growth. 

Your expertise covers:
- Career planning and transitions
- Skill development and learning paths
- Certifications and qualifications
- Project portfolio building
- Interview preparation
- Resume optimization
- Industry insights for Healthcare, Agriculture, and Urban Technology sectors

IMPORTANT RULES:
1. Only answer questions related to career, skills, professional development, and learning
2. If asked about unrelated topics, politely redirect to your specialization
3. Provide actionable, specific advice
4. Be encouraging and supportive in your responses
5. Use clear, concise language`;

        console.log('[Chat] Initializing OpenRouter API...');
        
        // OpenRouter Chat Completions (OpenAI-compatible)
        const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
        const apiKey = process.env.OPENROUTER_API_KEY as string;
        const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
        const referer = process.env.OPENROUTER_SITE_URL || 'http://localhost';
        const title = process.env.OPENROUTER_TITLE || 'SkillXIntell';

        // Build OpenRouter messages
        const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
            { role: 'system', content: systemPrompt },
        ];
        if (conversationHistory && Array.isArray(conversationHistory)) {
            conversationHistory.forEach((msg: any) => {
                messages.push({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: String(msg.content || ''),
                });
            });
        }
        messages.push({ role: 'user', content: String(message) });

        console.log('[Chat] Calling OpenRouter API...');
        
        try {
            const response = await axios.post(
                apiUrl,
                {
                    model,
                    messages,
                    max_tokens: 500,
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': referer,
                        'X-Title': title,
                    },
                    timeout: 30000,
                }
            );

            const reply = response.data?.choices?.[0]?.message?.content;
            
            if (!reply) {
                throw new Error('No text in response');
            }

            console.log('[Chat] Received response from OpenRouter');
            return res.json({
                success: true,
                reply,
                timestamp: new Date(),
            });
        } catch (providerError: any) {
            console.error('[Chat] OpenRouter API error:', providerError?.message || providerError);
            if (providerError?.response?.data) {
                console.error('[Chat] OpenRouter error payload:', JSON.stringify(providerError.response.data));
            }
            
            // Intelligent fallback based on message content
            const messageLower = message.toLowerCase();
            let fallbackReply = "I'm here to help with your career journey! ";
            
            if (messageLower.includes('healthcare') || messageLower.includes('clinical') || messageLower.includes('medical')) {
                fallbackReply += "For Healthcare sector careers, focus on: clinical informatics, health data analytics, EHR systems, and HIPAA compliance. Consider certifications in health IT and building relevant projects.";
            } else if (messageLower.includes('agriculture') || messageLower.includes('farming') || messageLower.includes('agri')) {
                fallbackReply += "For Agriculture sector careers, develop skills in: precision agriculture, agricultural IoT, crop monitoring, and sustainable farming. Build projects with real data and get certified in agri-tech.";
            } else if (messageLower.includes('urban') || messageLower.includes('city') || messageLower.includes('smart')) {
                fallbackReply += "For Urban Technology, master: GIS mapping, smart infrastructure, sustainable urban design, and urban planning. Work on real city challenges and get relevant certifications.";
            } else if (messageLower.includes('skill') || messageLower.includes('gap') || messageLower.includes('improve')) {
                fallbackReply += "To identify skill gaps: analyze your current proficiency vs. industry standards, take targeted courses, build hands-on projects, and get peer feedback through SkillXIntell's analytics.";
            } else if (messageLower.includes('course') || messageLower.includes('learn') || messageLower.includes('certification')) {
                fallbackReply += "Choose courses aligned with your career goals. Look for hands-on projects, industry recognition, and skills that match your target role. Our platform helps recommend courses based on your profile.";
            } else if (messageLower.includes('interview') || messageLower.includes('prepare') || messageLower.includes('job')) {
                fallbackReply += "For interview prep: research the company, practice common questions, showcase your projects, and explain your skills with examples. Build a strong portfolio to demonstrate your expertise.";
            } else if (messageLower.includes('project') || messageLower.includes('portfolio') || messageLower.includes('build')) {
                fallbackReply += "Projects are crucial for career growth. Build real-world solutions, contribute to open source, and make projects public. Focus on quality over quantity and document your learning.";
            } else {
                fallbackReply += "I specialize in career guidance, skill development, learning paths, certifications, projects, and interview preparation. What aspect of your career would you like to explore?";
            }
            
            return res.json({
                success: true,
                reply: fallbackReply,
                timestamp: new Date(),
            });
        }
    } catch (error) {
        console.error('[Chat] Error in sendMessage:', error);
        const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
        console.error('[Chat] Full error:', errorMessage);
        return res.json({
            success: true,
            reply: "I'm experiencing technical issues but I'm still here to help! Ask me about career guidance, skill development, certifications, projects, or interview preparation in Healthcare, Agriculture, or Urban Technology sectors.",
            timestamp: new Date(),
        });
    }
};

export const validateMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({
                success: false,
                isRelevant: false,
            });
        }

        const validationPrompt = `Determine if this message is related to career guidance, skill development, professional growth, learning, certifications, job search, interview prep, or similar professional topics. 

Message: "${message}"

Respond with ONLY "YES" or "NO".`;

        try {
            const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
            const apiKey = process.env.OPENROUTER_API_KEY as string;
            const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
            const referer = process.env.OPENROUTER_SITE_URL || 'http://localhost';
            const title = process.env.OPENROUTER_TITLE || 'SkillXIntell';

            const response = await axios.post(
                apiUrl,
                {
                    model,
                    messages: [
                        { role: 'system', content: 'You validate if a message is career/skills/professional development related.' },
                        { role: 'user', content: validationPrompt },
                    ],
                    max_tokens: 50,
                    temperature: 0,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                        'HTTP-Referer': referer,
                        'X-Title': title,
                    },
                    timeout: 15000,
                }
            );

            const responseText = (response.data?.choices?.[0]?.message?.content || '').trim().toUpperCase();
            const isRelevant = responseText.includes('YES');

            return res.json({
                success: true,
                isRelevant,
                message: isRelevant 
                    ? 'Message is career/skills related'
                    : 'Please ask questions related to career guidance, skill development, or professional growth',
            });
        } catch (error) {
            console.error('Error validating message:', error);
            // Assume it's relevant if validation fails
            return res.json({
                success: true,
                isRelevant: true,
                message: 'Message validation deferred to main handler',
            });
        }
    } catch (error) {
        console.error('Error validating message:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to validate message',
        });
    }
};
