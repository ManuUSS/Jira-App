interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData = {
    entries: [
        {
            description: 'Pending: Lorem kuygv toak kal main srpep pero.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'In Progress: Khn juo mioto perro saic o perm y ta.',
            status: 'in-progress',
            createdAt: Date.now() * 1.3
        },
        {
            description: 'Done: Kuiyn na dtop pero kmau jun gla por.',
            status: 'finished',
            createdAt: Date.now() * 1.5
        }
    ]
}
