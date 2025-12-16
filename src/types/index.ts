export interface WeakAura {
    id: string;
    name: string;
    spec: 'Blood' | 'Frost' | 'Unholy' | 'All Specs' | string;
    class: 'death-knight' | 'warlock' | 'All Classes' | string;
    author: string;
    description: string;
    features: string[];
    importString: string;
}
