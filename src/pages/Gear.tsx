import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

declare global {
    interface Window {
        $WowheadPower?: any;
    }
}

type GearOption = {
    name: string;
    source: string;
    id?: number;
    enchant?: string;
};

type SlotData = {
    slot: string;
    items: GearOption[]; // Top 3 options
};

type PhaseGear = {
    phase: string;
    slots: SlotData[];
};

type WeaponType = '2h' | 'dw';

type Gem = {
    id: number;
    name: string;
    count: number;
    color: string;
    note?: string;
};


// Helper to create placeholder slots
const createSlots = (prefix: string, spec: string, weaponType: WeaponType = '2h'): SlotData[] => {
    const isP1 = prefix === 'P1';

    const isDK = ['blood', 'frost', 'unholy'].includes(spec);
    const isWarlock = ['affliction', 'demonology', 'destruction'].includes(spec);
    const rangedSlotName = isWarlock ? 'Wand' : 'Sigil';
    const isAfflictionPreRaid = spec === 'affliction' && prefix === 'Pre-Raid';

    if (isAfflictionPreRaid) {
        // For Warlock in this UI: 'dw' (labeled as Off-hand) = 1H + OH. '2h' = Staff.
        const isOneHandPlusOffHand = weaponType === 'dw';

        const mainHand = isOneHandPlusOffHand
            ? { name: 'Titansteel Guardian', source: 'Crafting', id: 41384 }
            : { name: 'Grand Staff of the Nexus', source: 'Dungeon', id: 40489 };

        const offHand = isOneHandPlusOffHand
            ? { name: 'Faces of Doom', source: 'Inscription', id: 44210 }
            : { name: 'None', source: '' };

        return [
            { slot: 'Head', items: [{ name: 'Titan-forged Hood of Dominance', source: 'Wintergrasp', id: 44910 }, { name: 'Darkruned Helm', source: 'Reputation' }] },
            { slot: 'Neck', items: [{ name: 'Encircling Burnished Gold Chains', source: 'Dungeon', id: 37683 }] },
            { slot: 'Shoulders', items: [{ name: 'Runed Mana-Etched Spaulders', source: 'Crafting', id: 42102 }] },
            { slot: 'Back', items: [{ name: 'Deathchill Cloak', source: 'Crafting', id: 41610 }] },
            { slot: 'Chest', items: [{ name: 'Ebonweave Robe', source: 'Crafting', id: 42102 }] },
            { slot: 'Wrist', items: [{ name: 'Cuffs of the Shadow Sun', source: 'Dungeon', id: 37361 }] },
            { slot: 'Hands', items: [{ name: 'Ebonweave Gloves', source: 'Crafting', id: 42111 }] },
            { slot: 'Waist', items: [{ name: 'Plush Sash of Guzbah', source: 'Dungeon', id: 37644 }] },
            { slot: 'Legs', items: [{ name: 'Leggings of the Wanton Spellcaster', source: 'Dungeon', id: 37292 }] },
            { slot: 'Feet', items: [{ name: 'Sandals of Crimson Fury', source: 'Reputation', id: 44248 }] },
            { slot: 'Ring 1', items: [{ name: 'Signet of the Kirin Tor', source: 'Vendor', id: 44283 }] },
            { slot: 'Ring 2', items: [{ name: 'Annhylde\'s Ring', source: 'Dungeon', id: 37192 }] },
            { slot: 'Trinket 1', items: [{ name: 'Sundial of the Exiled', source: 'Vendor', id: 40682 }] },
            { slot: 'Trinket 2', items: [{ name: 'Mark of the War Prisoner', source: 'Dungeon', id: 37873 }] },
            { slot: 'Main Hand', items: [mainHand] },
            { slot: 'Off Hand', items: [offHand] },
            { slot: rangedSlotName, items: [{ name: 'Gemmed Wand of the Nerubians', source: 'Dungeon', id: 37238 }] }
        ];
    }

    if (spec === 'unholy' && prefix === 'Pre-Raid') {
        const isDW = weaponType === 'dw';

        const mainHand = isDW
            ? { name: 'Titansteel Bonecrusher', source: 'Crafting', id: 41383 }
            : { name: 'Titansteel Destroyer', source: 'Crafting', id: 41257 };

        const offHand = isDW
            ? { name: 'Grasscutter', source: 'Reputation', id: 40703 }
            : { name: 'None', source: '' };

        return [
            { slot: 'Head', items: [{ name: 'Spiked Titansteel Helm', source: 'Crafting', id: 41386 }] },
            { slot: 'Neck', items: [{ name: 'Titanium Earthguard Chain', source: 'Crafting', id: 42646 }] },
            { slot: 'Shoulders', items: [{ name: 'Pauldrons of Berserking', source: 'Dungeon', id: 34388 }] },
            { slot: 'Back', items: [{ name: 'Cloak of Bloodied Waters', source: 'BoE', id: 37647 }] },
            { slot: 'Chest', items: [{ name: "Heroes' Scourgeborne Battleplate", source: 'Tier 7 (10)', id: 39617 }] },
            { slot: 'Wrist', items: [{ name: 'Bands of the Stoneforge', source: 'Dungeon', id: 37668 }] },
            { slot: 'Hands', items: [{ name: "Heroes' Scourgeborne Gauntlets", source: 'Tier 7 (10)', id: 39618 }] },
            { slot: 'Waist', items: [{ name: "Verdungo's Barbarian Cord", source: 'Dungeon', id: 40688 }] },
            { slot: 'Legs', items: [{ name: 'Staggering Legplates', source: 'Dungeon', id: 37193 }] },
            { slot: 'Feet', items: [{ name: 'The Obliterator Greaves', source: 'Dungeon', id: 43402 }] },
            { slot: 'Ring 1', items: [{ name: 'Titanium Earthguard Ring', source: 'Crafting', id: 42643 }] },
            { slot: 'Ring 2', items: [{ name: 'Ring of the Kirin Tor', source: 'Vendor', id: 44935 }] },
            { slot: 'Trinket 1', items: [{ name: 'Darkmoon Card: Greatness', source: 'Darkmoon Faire', id: 42987 }] },
            { slot: 'Trinket 2', items: [{ name: 'Meteorite Whetstone', source: 'Dungeon', id: 37390 }] },
            { slot: 'Main Hand', items: [mainHand] },
            { slot: 'Off Hand', items: [offHand] },
            { slot: 'Sigil', items: [{ name: 'Sigil of the Wild Buck', source: 'Vendor', id: 40867 }] }
        ];
    }

    if (spec === 'unholy' && prefix === 'P1') {
        // Reuse common head logic if possible or hardcode for now since we know it's Obsidian Greathelm for P1 DK
        const isDW = weaponType === 'dw';
        const unholyHead = { name: 'Obsidian Greathelm', source: 'Raid (25)', id: 44006, enchant: '50 AP / 20 Crit' };

        const mainHand = isDW
            ? { name: 'Last Laugh', source: 'Raid (25)', id: 40402, enchant: 'Rune of the Fallen Crusader' }
            : { name: "Death's Bite", source: 'Raid (10)', id: 39417, enchant: 'Rune of the Fallen Crusader' };

        const offHand = isDW
            ? { name: 'Hailstorm', source: 'Raid (10)', id: 40491, enchant: 'Rune of the Fallen Crusader' }
            : { name: 'None', source: '' };

        return [
            { slot: 'Head', items: [unholyHead, { name: 'Alt Helm 1', source: 'Dungeon' }] },
            { slot: 'Neck', items: [{ name: 'Gem of Imprisoned Vassals', source: 'Raid', id: 39421 }] },
            { slot: 'Shoulders', items: [{ name: 'Valorous Scourgeborne Shoulderplates', source: 'Raid', id: 40557, enchant: '40 AP / 15 Crit' }] },
            { slot: 'Back', items: [{ name: 'Drape of the Deadly Foe', source: 'Raid', id: 40403, enchant: '23 Haste' }] },
            { slot: 'Chest', items: [{ name: 'Valorous Scourgeborne Battleplate', source: 'Raid', id: 40550, enchant: '+10 Stats' }] },
            { slot: 'Wrist', items: [{ name: 'Bracers of Unrelenting Attack', source: 'Raid', id: 40330, enchant: '50 AP' }] },
            { slot: 'Hands', items: [{ name: "Zeliek's Gauntlets", source: 'Raid', id: 40347, enchant: '44 AP' }] },
            { slot: 'Waist', items: [{ name: 'Girdle of Chivalry', source: 'Raid', id: 40278, enchant: 'Extra Socket' }] },
            { slot: 'Legs', items: [{ name: 'Riveted Abomination Leggings', source: 'Raid', id: 40294, enchant: '75 AP / 22 Crit' }] },
            { slot: 'Feet', items: [{ name: 'Sabatons of Sudden Reprisal', source: 'Raid', id: 39706, enchant: 'Icewalker' }] },
            { slot: 'Ring 1', items: [{ name: 'Circle of Death', source: 'Raid', id: 39401 }] },
            { slot: 'Ring 2', items: [{ name: 'Ruthlessness', source: 'Raid', id: 40075 }] },
            { slot: 'Trinket 1', items: [{ name: 'Darkmoon Card: Greatness', source: 'Quest', id: 42987 }] },
            { slot: 'Trinket 2', items: [{ name: 'Meteorite Whetstone', source: 'Dungeon', id: 37390 }, { name: 'Gem of Imprisoned Vassals', source: 'Raid', id: 39421 }] },
            { slot: 'Main Hand', items: [mainHand] },
            { slot: 'Off Hand', items: [offHand] },
            { slot: 'Sigil', items: [{ name: "Deadly Gladiator's Sigil of Strife", source: 'PvP', id: 42620 }] }
        ];
    }

    // Default / Placeholder logic handling
    // We want to avoid "Pre-Raid Helm", just "Helm" if specific item not known, or ideally the specific item.
    // Logic for DK P1 Helm
    let headItem: GearOption = { name: 'Helm', source: 'Dungeon/Raid' };
    if (isDK && isP1) {
        if (weaponType === 'dw') {
            headItem = { name: 'Obsidian Greathelm', source: 'Raid (25)', id: 44006 };
        } else {
            // 2H specific Helm (P1)
            headItem = { name: 'Spiked Titansteel Helm', source: 'Crafting', id: 41386 };
        }
    }

    return [
        {
            slot: 'Head',
            items: [headItem, { name: 'Alt Helm 1', source: 'Dungeon' }]
        },
        { slot: 'Neck', items: [{ name: 'Neck', source: 'Dungeon/Raid' }, { name: 'Alt Neck', source: 'Rep' }] },
        { slot: 'Shoulders', items: [{ name: 'Shoulders', source: 'Dungeon/Raid' }, { name: 'Alt Shoulders', source: 'Rep' }] },
        { slot: 'Back', items: [{ name: 'Back', source: 'Dungeon/Raid' }] },
        { slot: 'Chest', items: [{ name: 'Chest', source: 'Dungeon/Raid' }] },
        { slot: 'Wrist', items: [{ name: 'Wrist', source: 'Dungeon/Raid' }] },
        { slot: 'Hands', items: [{ name: 'Hands', source: 'Dungeon/Raid' }] },
        { slot: 'Waist', items: [{ name: 'Waist', source: 'Dungeon/Raid' }] },
        { slot: 'Legs', items: [{ name: 'Leggings', source: 'Dungeon/Raid' }] },
        { slot: 'Feet', items: [{ name: 'Boots', source: 'Dungeon/Raid' }] },
        { slot: 'Ring 1', items: [{ name: 'Ring 1', source: 'Dungeon/Raid' }] },
        { slot: 'Ring 2', items: [{ name: 'Ring 2', source: 'Dungeon/Raid' }] },
        { slot: 'Trinket 1', items: [{ name: 'Trinket 1', source: 'Dungeon/Raid' }] },
        { slot: 'Trinket 2', items: [{ name: 'Trinket 2', source: 'Dungeon/Raid' }] },
        { slot: 'Main Hand', items: [{ name: 'Main Hand Weapon', source: 'Dungeon/Raid' }] },
        { slot: 'Off Hand', items: [{ name: 'Off Hand', source: 'Dungeon/Raid' }] },
        { slot: rangedSlotName, items: [{ name: rangedSlotName, source: 'Dungeon/Raid' }] }
    ];
};


const gearData: Record<string, Record<WeaponType, PhaseGear[]>> = {
    blood: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'blood').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'blood').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'blood').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'blood').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'blood').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'blood').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'blood', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'blood', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'blood', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'blood', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'blood', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'blood', 'dw') },
        ]
    },
    frost: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'frost').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'frost').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'frost').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'frost').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'frost').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'frost').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'frost', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'frost', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'frost', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'frost', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'frost', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'frost', 'dw') },
        ]
    },
    unholy: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'unholy').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'unholy').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'unholy').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'unholy').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'unholy').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'unholy').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'unholy', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'unholy', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'unholy', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'unholy', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'unholy', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'unholy', 'dw') },
        ]
    },
    affliction: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'affliction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'affliction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'affliction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'affliction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'affliction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'affliction').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'affliction', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'affliction', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'affliction', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'affliction', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'affliction', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'affliction', 'dw') },
        ]
    },
    demonology: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'demonology').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'demonology').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'demonology').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'demonology').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'demonology').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'demonology').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'demonology', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'demonology', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'demonology', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'demonology', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'demonology', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'demonology', 'dw') },
        ]
    },
    destruction: {
        '2h': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'destruction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 1', slots: createSlots('P1', 'destruction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 2', slots: createSlots('P2', 'destruction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 3', slots: createSlots('P3', 'destruction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 4', slots: createSlots('P4', 'destruction').filter(s => s.slot !== 'Off Hand') },
            { phase: 'Phase 5', slots: createSlots('P5', 'destruction').filter(s => s.slot !== 'Off Hand') },
        ],
        'dw': [
            { phase: 'Pre-Raid Best in Slot', slots: createSlots('Pre-Raid', 'destruction', 'dw') },
            { phase: 'Phase 1', slots: createSlots('P1', 'destruction', 'dw') },
            { phase: 'Phase 2', slots: createSlots('P2', 'destruction', 'dw') },
            { phase: 'Phase 3', slots: createSlots('P3', 'destruction', 'dw') },
            { phase: 'Phase 4', slots: createSlots('P4', 'destruction', 'dw') },
            { phase: 'Phase 5', slots: createSlots('P5', 'destruction', 'dw') },
        ]
    }
};

const statPriorities = [
    { spec: 'blood', name: 'Blood (Tank)', stats: ['Stamina', 'Defense (to cap)', 'Hit Rating (8%)', 'Expertise (26)', 'Parry / Dodge'] },
    { spec: 'frost', name: 'Frost (DPS)', stats: ['Hit Rating (8%)', 'Expertise (26)', 'Strength', 'Armor Penetration', 'Critical Strike'] },
    { spec: 'unholy', name: 'Unholy (DPS)', stats: ['Hit Rating (8%)', 'Strength', 'Haste', 'Critical Strike', 'Armor Penetration'] },
    { spec: 'affliction', name: 'Affliction', stats: ['Hit Rating (17%)', 'Spell Power', 'Haste', 'Critical Strike', 'Spirit'] },
    { spec: 'demonology', name: 'Demonology', stats: ['Hit Rating (17%)', 'Spell Power', 'Haste', 'Critical Strike', 'Spirit'] },
    { spec: 'destruction', name: 'Destruction', stats: ['Hit Rating (17%)', 'Spell Power', 'Haste', 'Critical Strike', 'Spirit'] },
];

const getUnholyGems = (phase: string | null, weaponType: WeaponType): Gem[] => {
    if (!phase) return [];

    // Phase 2
    if (phase.includes('Phase 2')) {
        return [
            { id: 41398, name: 'Relentless Earthsiege Diamond', count: 1, color: 'text-purple-400' },
            { id: 40041, name: 'Fierce Monarch Topaz', count: 2, color: 'text-orange-400' },
            { id: 39996, name: 'Bold Scarlet Ruby', count: 11, color: 'text-red-500' },
            { id: 42142, name: "Bold Dragon's Eye", count: 3, note: 'Jewelcrafter', color: 'text-red-500' },
            { id: 45862, name: 'Bold Stormjewel', count: 1, color: 'text-red-500' },
            { id: 40129, name: 'Sovereign Twilight Opal', count: 1, color: 'text-purple-400' },
        ];
    }

    // Phase 3 (DW)
    if (phase.includes('Phase 3') && weaponType === 'dw') {
        return [
            { id: 41398, name: 'Relentless Earthsiege Diamond', count: 1, color: 'text-purple-400' },
            { id: 40146, name: 'Fierce Ametrine', count: 5, color: 'text-orange-400' },
            { id: 40111, name: 'Bold Cardinal Ruby', count: 10, color: 'text-red-500' },
            { id: 42142, name: "Bold Dragon's Eye", count: 3, note: 'Jewelcrafter', color: 'text-red-500' },
            { id: 45862, name: 'Bold Stormjewel', count: 1, color: 'text-red-500' },
            { id: 49110, name: 'Nightmare Tear', count: 1, color: 'text-purple-400' },
        ];
    }

    // Phase 4 (DW)
    if (phase.includes('Phase 4') && weaponType === 'dw') {
        return [
            { id: 41398, name: 'Relentless Earthsiege Diamond', count: 1, color: 'text-purple-400' },
            { id: 40111, name: 'Bold Cardinal Ruby', count: 10, color: 'text-red-500' },
            { id: 40146, name: 'Fierce Ametrine', count: 6, color: 'text-orange-400' },
            { id: 42142, name: "Bold Dragon's Eye", count: 3, note: 'Jewelcrafter', color: 'text-red-500' },
            { id: 49110, name: 'Nightmare Tear', count: 1, color: 'text-purple-400' },
        ];
    }

    // Default (Pre-Raid / Phase 1)
    if (phase.includes('Pre-Raid') || phase.includes('Phase 1')) {
        return [
            { id: 41398, name: 'Relentless Earthsiege Diamond', count: 1, color: 'text-purple-400' },
            { id: 42702, name: 'Enchanted Tear', count: 1, color: 'text-green-400' },
            { id: 39996, name: 'Bold Scarlet Ruby', count: 5, color: 'text-red-500' },
            { id: 42142, name: "Bold Dragon's Eye", count: 3, note: 'Jewelcrafter', color: 'text-red-500' },
        ];
    }

    return [];
};

const getWarlockGems = (phase: string | null): Gem[] => {
    if (!phase) return [];

    // Pre-Raid Warlock
    if (phase.includes('Pre-Raid')) {
        return [
            { id: 41285, name: 'Chaotic Skyflare Diamond', count: 1, color: 'text-purple-400' },
            { id: 39998, name: 'Runed Scarlet Ruby', count: 8, color: 'text-red-500' },
            { id: 40023, name: 'Reckless Monarch Topaz', count: 4, color: 'text-orange-400' },
            { id: 40051, name: 'Purified Twilight Opal', count: 2, color: 'text-purple-400' },
        ];
    }
    return [];
};

export default function Gear() {
    const { spec } = useParams<{ spec: string }>();
    const currentSpec = spec?.toLowerCase() || 'blood';
    const [expandedPhase, setExpandedPhase] = useState<string | null>('Pre-Raid Best in Slot');
    const [weaponType, setWeaponType] = useState<WeaponType>('2h');

    const currentGearFunc = gearData[currentSpec]?.[weaponType] || gearData['blood'][weaponType];
    const currentStats = statPriorities.find(s => s.spec === currentSpec) || statPriorities[0];

    useEffect(() => {
        // Enforce DW for Frost
        if (currentSpec === 'frost') {
            setWeaponType('dw');
        }

        // Refresh Wowhead tooltips when content changes
        if (window.$WowheadPower && window.$WowheadPower.refreshLinks) {
            window.$WowheadPower.refreshLinks();
        }
    }, [currentSpec, weaponType, expandedPhase]); // Dependencies that change content

    const isWarlock = ['affliction', 'demonology', 'destruction'].includes(currentSpec);
    const gems = currentSpec === 'unholy'
        ? getUnholyGems(expandedPhase, weaponType)
        : isWarlock
            ? getWarlockGems(expandedPhase)
            : [];

    return (
        <div className="max-w-7xl mx-auto flex gap-8">
            <div className="flex-1 min-w-0">
                <div id="header" className="mb-8 fade-in">
                    <h1 className="mb-3 capitalize">{currentSpec} Gear Guide</h1>
                    <p className="text-gray-400 text-lg">
                        Best in Slot lists, items, and stat priorities for {currentStats.name}.
                    </p>
                </div>

                {/* Stat Priorities */}
                <div id="priorities" className="card mb-8 fade-in">
                    <h2 className="mb-6">Stat Priorities</h2>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <ol className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                            {currentStats.stats.map((stat, i) => (
                                <li key={stat} className="flex items-center text-gray-200 text-lg">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 mr-3">
                                        {i + 1}
                                    </span>
                                    {stat}
                                    {i < currentStats.stats.length - 1 && (
                                        <span className="mx-4 text-gray-600 hidden md:inline">›</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* Gear Character Sheet Layout */}
                <div id="gear-sheet" className="mb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-100">Gear Set</h2>

                        {/* Weapon Filter */}
                        <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700 mt-4 sm:mt-0">
                            {currentSpec !== 'frost' && (
                                <button
                                    onClick={() => setWeaponType('2h')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${weaponType === '2h'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-gray-200'
                                        }`}
                                >
                                    2-Handed
                                </button>
                            )}
                            <button
                                onClick={() => setWeaponType('dw')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${weaponType === 'dw'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                {isWarlock ? 'Off-hand' : 'Dual Wield'}
                            </button>
                        </div>
                    </div>

                    {/* Phase Selection Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {currentGearFunc.map((phaseData) => (
                            <button
                                key={phaseData.phase}
                                onClick={() => setExpandedPhase(phaseData.phase)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${expandedPhase === phaseData.phase
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                                    }`}
                            >
                                {phaseData.phase === 'Pre-Raid Best in Slot' ? 'Pre-Raid' : phaseData.phase}
                            </button>
                        ))}
                    </div>

                    {/* Character Sheet Container */}
                    {currentGearFunc.filter(p => p.phase === expandedPhase).map((phaseData) => {
                        const getSlot = (name: string) => phaseData.slots.find(s => s.slot === name);

                        // Slot Component
                        const GearSlot = ({ slotName, side = 'left' }: { slotName: string, side?: 'left' | 'right' | 'bottom' }) => {
                            const slotData = getSlot(slotName);
                            if (!slotData) return <div className="hidden"></div>;

                            const bisItem = slotData.items[0];
                            const alts = slotData.items.slice(1);

                            return (
                                <div className={`group relative flex items-center gap-3 ${side === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'} mb-4`}>
                                    {/* Icon Box */}
                                    <div className={`relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-colors shadow-inner ${bisItem.id ? 'bg-gray-900' : 'bg-gray-900 border-2 border-gray-600 group-hover:border-cyan-400'}`}>
                                        {/* Wowhead Icon Link (Large Icon) */}
                                        {bisItem.id ? (
                                            <a
                                                href={`https://www.wowhead.com/wotlk/item=${bisItem.id}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full gear-icon-adjust"
                                                data-wh-icon-size="large"
                                                data-wh-rename-link="false"
                                                onClick={() => {
                                                    // Optional interaction
                                                }}
                                            >
                                                {/* Fallback/Spacer */}
                                            </a>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">?</div>
                                        )}
                                    </div>

                                    {/* Item Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-bold text-gray-300 group-hover:text-white truncate transition-colors">
                                            {bisItem.id ? (
                                                <a
                                                    href={`https://www.wowhead.com/wotlk/item=${bisItem.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="no-wh-icon hover:underline"
                                                    data-wh-icon-size="none"
                                                >
                                                    {bisItem.name}
                                                </a>
                                            ) : (
                                                bisItem.name
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-500">{bisItem.source}</div>

                                        {/* Alts Popover */}
                                        {alts.length > 0 && (
                                            <div className="text-[10px] text-cyan-500 mt-0.5 cursor-pointer hover:underline">
                                                + {alts.length} alternatives
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        };

                        return (
                            <div key={phaseData.phase} className="relative bg-[#0b0d12]/80 border border-gray-800 rounded-xl p-4 md:p-8 shadow-2xl overflow-hidden min-h-[600px] flex flex-col md:flex-row justify-between backdrop-blur-sm">

                                {/* Left Column */}
                                <div className="flex flex-col w-full md:w-[350px] z-10 space-y-2">
                                    <GearSlot slotName="Head" />
                                    <GearSlot slotName="Neck" />
                                    <GearSlot slotName="Shoulders" />
                                    <GearSlot slotName="Back" />
                                    <GearSlot slotName="Chest" />
                                    <GearSlot slotName="Wrist" />
                                </div>

                                {/* Center (Model / Empty Space) */}
                                <div className="flex-1 hidden md:flex items-center justify-center z-0 opacity-20">
                                    {/* Placeholder for character model or class crest */}
                                    <div className="w-64 h-64 rounded-full border-4 border-gray-800/50 flex items-center justify-center">
                                        <span className="text-4xl text-gray-700 font-black tracking-widest uppercase">{currentSpec}</span>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col w-full md:w-[350px] z-10 space-y-2">
                                    <GearSlot slotName="Hands" side="right" />
                                    <GearSlot slotName="Waist" side="right" />
                                    <GearSlot slotName="Legs" side="right" />
                                    <GearSlot slotName="Feet" side="right" />
                                    <GearSlot slotName="Ring 1" side="right" />
                                    <GearSlot slotName="Ring 2" side="right" />
                                    <GearSlot slotName="Trinket 1" side="right" />
                                    <GearSlot slotName="Trinket 2" side="right" />
                                </div>

                                {/* Bottom Row (Weapons) - Absolute or Flex layout */}
                                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-16 z-10 px-8">
                                    <div className="flex gap-4">
                                        <GearSlot slotName="Main Hand" side="bottom" />
                                        {weaponType === 'dw' && <GearSlot slotName="Off Hand" side="bottom" />}
                                        <GearSlot slotName={['affliction', 'demonology', 'destruction'].includes(currentSpec) ? 'Wand' : 'Sigil'} side="bottom" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Enchants & Gems - Unholy & Warlock */}
                {(currentSpec === 'unholy' || (isWarlock && gems.length > 0)) && (
                    <div id="enchants" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {currentSpec === 'unholy' && (
                            <div className="card fade-in">
                                <h2 className="mb-4">Encantamientos Recomendados</h2>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/item=44149" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Arcanum of Torment</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Ebon Blade</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/item=44133" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Greater Inscription of the Axe</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Sons of Hodir</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/spell=47898" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Enchant Cloak - Greater Speed</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Enchanting</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/item=44465" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Enchant Chest - Powerful Stats</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Enchanting</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/item=44815" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Enchant Bracers - Greater Assault</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Enchanting</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/spell=54758" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Hyperspeed Accelerators</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Engineering</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/spell=54736" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Personal Electromagnetic Pulse Generator</a>
                                            <span className="text-gray-500">+</span>
                                            <a href="https://www.wowhead.com/wotlk/item=41611" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Eternal Belt Buckle</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Eng / BS</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/item=38374" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Icescale Leg Armor</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Leatherworking</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/spell=55016" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Nitro Boosts</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Engineering</span>
                                    </li>
                                    <li className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                        <span className="flex items-center gap-2">
                                            <a href="https://www.wowhead.com/wotlk/spell=53344" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium" data-wh-icon-size="small">Rune of the Fallen Crusader</a>
                                        </span>
                                        <span className="text-xs text-gray-500">Runeforging</span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {gems.length > 0 && (
                            <div className="card fade-in">
                                <h2 className="mb-4">Gemas (Gems)</h2>
                                <ul className="space-y-2 text-gray-300">
                                    {gems.map((gem, i) => (
                                        <li key={i} className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-gray-800">
                                            <span className="flex items-center gap-2">
                                                <a href={`https://www.wowhead.com/wotlk/item=${gem.id}`} target="_blank" rel="noopener noreferrer" className={`font-medium ${gem.color}`} data-wh-icon-size="small">
                                                    {gem.name}
                                                </a>
                                                {gem.note && <span className="text-xs text-gray-500">({gem.note})</span>}
                                            </span>
                                            <span className="text-cyan-400 font-bold">{gem.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Resources */}
                <div id="resources" className="card mt-8 fade-in">
                    <h2 className="mb-4">Recursos para Equipamiento</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><a href="https://www.raidbots.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Raidbots</a> - Simula tu personaje para encontrar mejoras</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><a href="https://www.wowhead.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Wowhead</a> - Base de datos de items y guías BiS</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><a href="https://www.icy-veins.com/wow/death-knight-gear-guide" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Icy Veins</a> - Guías de equipamiento actualizadas</span>
                        </li>
                    </ul>
                </div>
            </div>

            <RightSidebar
                navigationItems={[
                    { label: 'Introducción', href: '#header' },
                    { label: 'Prioridades de Stats', href: '#priorities' },
                    { label: 'Gear Lists', href: '#gear-lists' },
                    { label: 'Enchants & Gems', href: '#enchants' },
                    { label: 'Recursos', href: '#resources' }
                ]}
            />
        </div >
    );
}
