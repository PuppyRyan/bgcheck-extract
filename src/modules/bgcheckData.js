const ChronicleWeights = {
    ['Less7AccountAge']: 10,
    ['Less14AccountAge']: 8,
    ['Less40BadgesPerYear']: 5,
    ['Less30AccountAge']: 4,
    ['NoGroups']: 1.5,
    ['Less60AccountAge']: 2,
    ['NoFriends']: 1.5,
    ['Less90AccountAge']: 2,
    ['Less15ClothingItems']: 1.5,
    ['Less5Groups']: 2.5,
    ['LessFriends']: 1,
    ['Less180AccountAge']: 1,
    ['Less10Groups']: 1,
    ['NoSocials']: 0.2,
    ['PrivateInventory']: 0.2,
    ['NoLimiteds']: 0.2,
    ['Less5BadgePages']: 6,
    ['Less2BadgePages']: 8,
    ['LessRecommenedPages']: 4.5,
    ['Within30DaysJoinedBA']: 5,
    ['Within1DayJoinedBA']: 8,
    ['SpamGroups']: 2.5,
    ['SpamAvatarItems']: 6,
    ['BadgeWalk']: 7,
    ['ObbyBadges']: 3.5,
    ['FakeBadgeMajority']: 7.5,
    ['NoBadges']: 10,
    ['UnusualBadgeActivity']: 7,
    ['Inactivity']: 6,
    ['Inactivity3Months']: 2,
}

const Colours = {
    ['Probable']: 'FF6060',
    ['Potential']: 'FFB74A',
    ['Less Likely']: '00FFA1',
    ['Improbable']: '00FFA1',
}

const ExpectedFollowPresence = {
    ['1']: '10',
    ['2']: '15',
    ['3']: '20',
    ['4']: '25',
    ['5']: '35',
    ['6']: '35',
    ['7']: '35',
    ['8']: '35',
    ['9']: '35',
    ['10']: '50',
    ['11']: '50',
    ['12']: '50',
    ['13']: '50',
    ['14']: '50',
    ['15']: '50',
    ['16']: '50',
    ['17']: '50',
    ['18']: '50',
    ['19']: '50',
    ['20']: '50',
    ['21']: '50',
}

const ExpectedPages = {
    ['1']: 5,
    ['2']: 8,
    ['3']: 16,
    ['4']: 25,
    ['5']: 25,
    ['6']: 25,
    ['7']: 35,
    ['8']: 35,
}

const RobloxOwnedItems = [
    'NeoClassic',
    'Classic Male',
    'Beautiful You',
    'Black Jeans',
    'Skater Pants',
    'Jean Shorts',
    'Dark Green Jeans',
    'Motorcycle',
    'Roblox Shirt',
    'Roblox',
    'Denim Jacket', 
    'ROBLOX', 
    'Pastel Starburst',
    'Guitar Tee',
    'Green Jersey',
    'Blue Plaid Shirt', 
    'Teal Shirt', 
    'Purple and Teal Top', 
    'Pizza Shirt', 
    'I <3 Pizza Shirt',
    'Grey Striped Shirt with Denim Jacket', 
    'International Fedora',
    'Medieval Hood of Mystery',
    'Roblox Baseball Cap',
    'Down to Earth Hair',
    'Stylish Aviators',
    'Orange Shades',
    'Robox',
    'Jade Necklace',
    'Purple Blossom Shades',
    'Peppermint Macron Goggles',
    'Verified',
    'Ice Brain',
    'ZZZ Headband',
    'Golden Headphones',
    'Roblox Visor',
    'The Encierro Cap',
    'Red Roblox Cap',
    'Hare Hoodie',
    'Nomad',
    'Crystal Ball Hat',
    "Gold 'n' White Curved Horns",
    'Golden Bucket Hat',
    'Watermelon Slices',
    'Blue Flame Robo',
    'Daffodil Sunglasses',
    'Hammer Head',
    'Mischievous Mini-Vampire Hat',
    'Delicious Día de los Reyes Hat',
    'New Year Kadomatsu',
    'Festive Shark Hat',
    'Cup of Gahwa',
    'Paranormal Party Starter',
    'Diwali Food Hat',
    'Mama Kiwi',
    'Frill-seeker Lizard',
    'Too Cool Koala',
    'Fireworks in France Hat',
    'Hermitude Black Logo Hat',
    'SOFI TUKKER Purple Hat',
    'Luchador Champion',
    'Dessert Plate Hat',
    'Pumpkin Patch',
    'Cyber Rider Helmet',
    'Monkey Safari Hat',
    'Traditional Chinese Hat',
    'Upside-down China bowl',
    'Luobu Explorer Hat',
    'Destination: Moon and stars',
    'Luobu Party Crown',
    'Luobu Baseball cap',
    'Safer Internet Day 2021 Cap',
    'Sonic Isolators',
    'Cooperative Cap',
    'Historic Headphones',
    'Bloxypunk Top Hat',
    'Bloxysaurus Rawx',
    'Safer Internet Day 2020 Cap',
    "Kylo Ren's Helmet",
    "Layla's Racing Helmet",
    "Echo's Hat",
    'Floppy Orange Sun Hat',
    'Silver Bicycle Helmet',
    'Bicycle Helmet',
    'Formal Holiday Fedora',
    'Screaming Mad Jack-o-Lantern',
    'Opened Platformer Gift',
    "Angry Birds' Headphones",
    'Angry Birds',
    'Dory Headphones',
    'Hat Couture',
    "Pete's Dragon Forest Ranger's",
    'Temple Challenger Hat',
    'Snowboard Helmet',
    'Top of the World Egg',
    "Yondu's Fin",
    'Star-Lord',
    'Skeletal Crew',
    'Griffin Hat',
    'Lighting McQueen',
    "Kids' Choice",
    'Ninjago',
    'Nerf Zombie',
    'Nerf',
    'Spider-Man Hat',
    'Voltron Head',
    'Minotaur Mask',
    'Black Panther',
    'Killmonger',
    'Solo',
    'Incredibles 2',
    'Dr. Livingstpup',
    'Ant-Man',
    'Golden Football Helmet',
    'Knights of Redcliff',
    'The High Seas',
    'Crown of Carols',
    '- Helmet',
    'Pinata Hat',
    'Eggtanic',
    'Rebellious Alien Cap',
    'Hovering Heart',
    'Demogorgon',
    'Rodan',
    'Stormtrooper Helmet',
    'Star Wars',
    'Kylo Ren',
    'Britannegg',
    'Imagination Core',
    'Super Bowl',
    'Los Angeles',
    "Max's Walkman",
    'Rubber Ducky Aura',
    'Rainbow Hero Mask',
    'Slime Sunglasses',
    'Shades of the Blue Bird',
    'Overdrive Goggles',
    'WWE',
    'John',
    'Junkbot',
    'Lin',
    'WDW',
]

module.exports = { ChronicleWeights, ExpectedFollowPresence, ExpectedPages, Colours, RobloxOwnedItems};