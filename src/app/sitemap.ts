import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mihirkasodariya.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other public routes if they exist
    ];
}
