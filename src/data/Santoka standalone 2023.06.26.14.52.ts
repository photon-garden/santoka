// This data comes from scraping the poems directly on terebess.hu.
// There are some other pages and files (e.g. .doc files) linked from
// the Terebess site that I plan on grabbing, but haven't done that yet.

export interface Database {
	poems: Poem[]
	publications: Publication[]
	translators: Translator[]
}

export interface Poem {
	id: number
	englishText: string
	japaneseText?: string
	publicationId: number
	translatorId: number
	notes?: string
	editing: false
}

export interface Translator {
	id: number
	name: string
}

export interface Publication {
	id: number
	description: string
}

const database: Database = {
	poems: [
		{
			id: 0,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'My back view as I go, / Wetted with the winter rain?',
			japaneseText: 'Ushiro-sugata no shigurete yuku ka'
		},
		{
			id: 1,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Up to the very end, it is journeying, / And cutting our (toe-) nails.',
			japaneseText: 'Itsumademo tabi wo suru koto no tsume wo kiru'
		},
		{
			id: 2,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'My native place / Far away: / The buds on the trees.',
			japaneseText: 'Furusato wa tokushite ki no me'
		},
		{
			id: 3,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Into the iron bowl also, / Hailstones.',
			japaneseText: 'Tetsubachi no naka e mo arare'
		},
		{
			id: 4,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Plop on my kasa / The flower of the camellia!',
			japaneseText: 'Kasa e pottori tsubaki datta'
		},
		{
			id: 5,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I have gratefully received it; / It was enough; / I lay down my chopsticks.',
			japaneseText: 'Itadaite tarife hitori no hashi wo oku'
		},
		{
			id: 6,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'The road became quiet and solitary; / Dokudami is budding.',
			japaneseText: 'Shizukana michi to nari dokudami no me',
			notes:
				'*The dokudami, also called shibuki, is a small, ill-smelling weed with a four-petalled white flower that blooms in summer.'
		},
		{
			id: 7,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'A crow is cawing; / I also am by myself.',
			japaneseText: 'Karasu naite watashi mo hitori'
		},
		{
			id: 8,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText:
				'Going further into them, / And further into them, / Still more green mountains.',
			japaneseText: 'Wake-itte mo wake-itte mo aoi yama'
		},
		{
			id: 9,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'This is the stone, / Drenched with rain, / That marks the way.',
			japaneseText: 'Shitodo ni nurete kore wa michishirube no ishi'
		},
		{
			id: 10,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Rained upon / For all our sakes, / Hotoke Sama.',
			japaneseText: 'Hito no tame ni shigurete hotoke sama'
		},
		{
			id: 11,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Leaves of the trees fall; / Walking on and on.',
			japaneseText: 'Ko-no-ha chiru aruki-tsumeru'
		},
		{
			id: 12,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'The snow of life and death / Falls incessantly.',
			japaneseText: 'Sei-shi no naka no yuki furi-shikiru'
		},
		{
			id: 13,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText:
				'Walking through / The bush clover, the pampas grass, / Walking on through them.',
			japaneseText: 'Fumi-wakeru hagi yo susuki yo'
		},
		{
			id: 14,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Buoyantly we go / Like the wind, / Tasting water.',
			japaneseText: 'Hyo-hyo to shite mizu wo ajiwau'
		},
		{
			id: 15,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I am bitten by mosquitoes, / Quite alone.',
			japaneseText: 'Hitori de ka ni kuwarete iru'
		},
		{
			id: 16,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I walk along, / Letting the dragon-fly / Perch on my kasa.',
			japaneseText: 'Kasa ni tombo wo tomarasete aruku'
		},
		{
			id: 17,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Cold winter rain; / I am still alive.',
			japaneseText: 'Shigururu ya shinanaide iru'
		},
		{
			id: 18,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I am walking; / It cannot be otherwise.',
			japaneseText: 'Do shiyo mo nai watashi ga aruite oru'
		},
		{
			id: 19,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Crossing over / A dried up river.',
			japaneseText: 'Kare-kitta kawa wo wataru'
		},
		{
			id: 20,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Quite withered up, / It is just beans.',
			japaneseText: 'Sukkari karete mame to natte iru'
		},
		{
			id: 21,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: "I can't throw it away, / But how heavy my pack, / Before and behind!",
			japaneseText: 'Sutekirenai nimotsu no omosa mae ushiro'
		},
		{
			id: 22,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I am wet / By the rain / From that cloud.',
			japaneseText: 'Ano kumo ga otoshita ame ni nurete iru'
		},
		{
			id: 23,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'The grasses / That have become autumn,-- / Sitting down in them.',
			japaneseText: 'Aki to natta zasso ni suwaru'
		},
		{
			id: 24,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Seeds of grasses; / My monkish robe / Is so worn!',
			japaneseText: 'Hoi konna ni yaburete kusa no mi'
		},
		{
			id: 25,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'As I grow old, / I yearn for my native place: / Tsukutsukuboshi!',
			japaneseText: 'Toshi toreba kokyo koishii tsukutsuku-boshi'
		},
		{
			id: 26,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Together with the sound of the water, / I came down to my native village.',
			japaneseText: 'Mizuoto to issho ni sato e orite kita'
		},
		{
			id: 27,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Intently / I eat my meal / Of boiled rice only.',
			japaneseText: 'Shimi-jimi taberu meshi bakari no meshi de aru'
		},
		{
			id: 28,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Not a single cloud in the sky; / I take off my kasa.',
			japaneseText: 'Mattaku kumo ga nai kasa wo nugi'
		},
		{
			id: 29,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'The sound of the rain-drops also / Has grown older.',
			japaneseText: 'Amadare no oto mo toshi-totta'
		},
		{
			id: 30,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'No house more to beg from; / Clouds over the mountains.',
			japaneseText: 'Mono kou ie mo naku nari yama ni wa kumo'
		},
		{
			id: 31,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'Has my kasa too / Begun to leak?',
			japaneseText: 'Kasa mo moridashita ka'
		},
		{
			id: 32,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'The grasses I tread, / Uncertain and fickle, / Are all withered away.',
			japaneseText: 'Ate mo naku fumiaruku kusa mina karetari'
		},
		{
			id: 33,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText:
				'In the warm sunlight / At the foot of the hill, standing side by side, / A few graves.',
			japaneseText: 'Yama-suso atataka na hi ni narabu haka sukoshi kana'
		},
		{
			id: 34,
			editing: false,
			translatorId: 0,
			publicationId: 0,
			englishText: 'I was silent all day: / Facing the sea, / The tide came up.',
			japaneseText: 'Ichi-nichi mono iwazu umi ni mukaeba shio michite kinu'
		},
		{
			id: 35,
			editing: false,
			translatorId: 1,
			publicationId: 1,
			englishText: 'A soft whirling drunk\na scattering of leaves.',
			japaneseText: 'Horohoro yoppaute\nki no ha chiru.'
		},
		{
			id: 36,
			editing: false,
			translatorId: 2,
			publicationId: 2,
			englishText: 'further in yet / further in yet / green hills',
			japaneseText: ''
		},
		{
			id: 37,
			editing: false,
			translatorId: 2,
			publicationId: 2,
			englishText: 'taking a leisurely pee / in lush sprouting grass',
			japaneseText: ''
		},
		{
			id: 38,
			editing: false,
			translatorId: 2,
			publicationId: 2,
			englishText: 'tree leaves fall / walking on and on',
			japaneseText: ''
		},
		{
			id: 39,
			editing: false,
			translatorId: 2,
			publicationId: 2,
			englishText: 'on a rock the dragonfly / looks at midday dreams',
			japaneseText: ''
		},
		{
			id: 40,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In pine winds at dawn and dusk striking the bell',
			japaneseText: 'Matsukaze ni akekure no kane tsuite'
		},
		{
			id: 41,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I go in I go in still the blue mountains',
			japaneseText: 'Wakeitte mo wakeitte mo aoi yama'
		},
		{
			id: 42,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In the midst of life and death the snow falls ceaselessly',
			japaneseText: 'Seishi no naka no yuki furishikiru'
		},
		{
			id: 43,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Burning heaven on my head I beg I walk',
			japaneseText: 'Enten o itadaite koi aruku'
		},
		{
			id: 44,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Alone being eaten up by mosquitoes',
			japaneseText: 'Hitori de ka ni kuwareteiru'
		},
		{
			id: 45,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Letting the dragonfly stay on my hat I walk on',
			japaneseText: 'Kasa ni tombo o tomarasete aruku'
		},
		{
			id: 46,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The road being straight lonesome',
			japaneseText: 'Massuguna michi de samishii'
		},
		{
			id: 47,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Wordlessly I put on today's straw sandals",
			japaneseText: 'Damatte kyo no zori haku'
		},
		{
			id: 48,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Fluttering drunk leaves scatter',
			japaneseText: 'Horohoro youte ki no ha chiru'
		},
		{
			id: 49,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Winter shower I'm still not dead",
			japaneseText: 'Shigururu ya shinanaideiru'
		},
		{
			id: 50,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The shadow in the water I am a traveler',
			japaneseText: 'Mizu ni kage aru tabibito de aru'
		},
		{
			id: 51,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The snow falls falls as I watch the snow',
			japaneseText: 'Yuki ga furu furu yuki miteoreba'
		},
		{
			id: 52,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I've received enough to eat the rain starts",
			japaneseText: 'Taberu dake wa itadaita ame to nari'
		},
		{
			id: 53,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "It having survived I'm scratching my body",
			japaneseText: 'Ikinokotta karada o kaiteiru'
		},
		{
			id: 54,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The mountain I'll never see again grows distant",
			japaneseText: 'Mata miru koto mo nai yama ga touzakaru'
		},
		{
			id: 55,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "A shrike calls there's no place to dump my body",
			japaneseText: 'Mozu naite mi no sute dokoro nashi'
		},
		{
			id: 56,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Hopeless I keep walking',
			japaneseText: 'Dou shiyou mo nai watashi ga aruiteiru'
		},
		{
			id: 57,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The Daikan Peak\nI go in and the sound of water',
			japaneseText: 'Wakeireba mizu no oto'
		},
		{
			id: 58,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I slip and fall the mountain hushed',
			japaneseText: 'Subette koronde yama ga hissori'
		},
		{
			id: 59,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Maimai's Residence\nCeaselessly dropping these large leaves",
			japaneseText: 'Shikirini ochiru ookii ha kana'
		},
		{
			id: 60,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Completely withered they are now beans',
			japaneseText: 'Sukkari karete mame to natteiru'
		},
		{
			id: 61,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'On my tired leg a dragonfly has lighted',
			japaneseText: 'Tsukareta ashi e tombo tomatta'
		},
		{
			id: 62,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A withered mountain with enough water to drink',
			japaneseText: 'Kareyama nomu hodo no mizu wa arite'
		},
		{
			id: 63,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "My monk's robe so torn grass seeds",
			japaneseText: 'Houi konnani yaburete kusa no mi'
		},
		{
			id: 64,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "That cloud dropped the rain I'm getting wet in",
			japaneseText: 'Ano kumo ga otoshita ame ni nureteiru'
		},
		{
			id: 65,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Autumn's come I sit in the weeds",
			japaneseText: 'Aki to natta zassou ni suwaru'
		},
		{
			id: 66,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Such delicious water overflowing',
			japaneseText: 'Konnani umai mizu ga afureteiru'
		},
		{
			id: 67,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "With the sound of water I've come down to a village",
			japaneseText: 'Mizuoto to issho ni sato e oritekita'
		},
		{
			id: 68,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Absolutely no cloud I take off my hat',
			japaneseText: 'Mattaku kumo ga nai kasa o nugi'
		},
		{
			id: 69,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Up to the graves in rows the waves rolling in',
			japaneseText: 'Haka ga narande soko made nami ga oshiyosete'
		},
		{
			id: 70,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Drunk I'd been asleep with the crickets",
			japaneseText: 'Youte kourogi to neteita'
		},
		{
			id: 71,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The sound of the rain dripping has also grown old',
			japaneseText: 'Amadare no oto mo toshitotta'
		},
		{
			id: 72,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Holding out its branches a winter tree',
			japaneseText: 'Eda o sashinobeteiru fuyuki'
		},
		{
			id: 73,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'No more houses to beg at above the mountain clouds',
			japaneseText: 'Mono kou ie mo nakunari yama ni wa kumo'
		},
		{
			id: 74,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Or I stop begging and am looking at the mountain6',
			japaneseText: 'Aruiwa kou koto o yamete yama o miteiru'
		},
		{
			id: 75,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Even my hat has started to leak I see',
			japaneseText: 'Kasa mo moridashita ka'
		},
		{
			id: 76,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "This frosty night's bed must be somewhere",
			japaneseText: 'Shimoyo no nedoko ga dokoka ni aro'
		},
		{
			id: 77,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Your back in the winter shower you go away I see',
			japaneseText: 'Ushiro sugata no shigurete yukuka'
		},
		{
			id: 78,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Into my iron alms bowl too hail',
			japaneseText: 'Teppatsu no naka e mo arare'
		},
		{
			id: 79,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'This the tooth that came out just like that',
			japaneseText: 'Horori to nuketa ha de wa aru'
		},
		{
			id: 80,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Cold clouds hurry',
			japaneseText: 'Samui kumo ga isogu'
		},
		{
			id: 81,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "My hometown's distant tree buds",
			japaneseText: 'Furusato wa toukushite ki no me'
		},
		{
			id: 82,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Thump on my hat was a camellia',
			japaneseText: 'Kasa e pottori tsubaki datta'
		},
		{
			id: 83,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In autumn wind I pick up a stone',
			japaneseText: 'Akikaze no ishi o hirou'
		},
		{
			id: 84,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Along today's road dandelions have bloomed",
			japaneseText: 'Kyou no michi no tampopo saita'
		},
		{
			id: 85,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Rain falls in my hometown walk barefoot',
			japaneseText: 'Ame furu furusato wa hadashi de aruku'
		},
		{
			id: 86,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'To the kitchen moonlight alone',
			japaneseText: 'Kuriya made tsukikage no hitori de'
		},
		{
			id: 87,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			japaneseText: 'Asayake ame furu daikon makou',
			englishText: "Morning glow rain falls I'll sow daikon"
		},
		{
			id: 88,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Dew in grass seeds, trying to calm down',
			japaneseText: 'Kusa no mi no tsuyu no, ochitsukou to suru'
		},
		{
			id: 89,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'From the evening sky I accept one citron',
			japaneseText: 'Yuuzora kara yuzu no hitotsu o morau'
		},
		{
			id: 90,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The moon risen I'm waiting for nothing in particular",
			japaneseText: 'Tsuki ga nobotte nani o matsu de mo naku'
		},
		{
			id: 91,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'With this and that to eat one windy day',
			japaneseText: 'Arekore taberu mono wa atte kaze no ichinichi'
		},
		{
			id: 92,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The sound of water truly I've calmed down",
			japaneseText: 'Mizuoto shinjitsu ochitsukimashita'
		},
		{
			id: 93,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The sense that someone's coming the sky cloudy loquat blossoms",
			japaneseText: 'Dare ka kisou na sora ga kumotteiru biwa no hana'
		},
		{
			id: 94,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In the snowy sky I pick the last one',
			japaneseText: 'Yukizora no saigo no hitotsu o mogu'
		},
		{
			id: 95,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Gochu snow falls as a solitary man I make a fire',
			japaneseText: 'Gochu yuki furu hitori to shite hi o taku'
		},
		{
			id: 96,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A warm day, still have things to eat',
			japaneseText: 'Nukui hi no, mada taberu mono wa aru'
		},
		{
			id: 97,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Through the moonlight's center I come back",
			japaneseText: 'Tsukikage no mannaka o modoru'
		},
		{
			id: 98,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I'm in the quietness of snow falling on snow",
			japaneseText: 'Yuki e yuki furu shizukesa ni oru'
		},
		{
			id: 99,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Snow falls one by one they go',
			japaneseText: 'Yuki furu hitori hitori yuku'
		},
		{
			id: 100,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Moonlit night, so your gift was rice',
			japaneseText: 'Tsukiyo, temiyage wa kome dattaka'
		},
		{
			id: 101,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Camellias open there's a grave",
			japaneseText: 'Tsubaki hiraite haka ga aru'
		},
		{
			id: 102,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The noise a bird that's come to eat nuts in the morning perhaps",
			japaneseText: 'Oto wa asa kara ki no mi o tabeni kita tori ka'
		},
		{
			id: 103,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I pull and pull yet I pull the grass's attachment",
			japaneseText: 'Nuite mo nuite mo kusa no shuuchaku o nuku'
		},
		{
			id: 104,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Today I pick bog rhubarb I eat bog rhubarb',
			japaneseText: 'Kyou wa fuki o tsumi fuki o tabe'
		},
		{
			id: 105,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Sparrows dance yeah dandelions scatter yeah',
			japaneseText: 'Suzume odoru ya tampopo chiru ya'
		},
		{
			id: 106,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A butterfly from back to front fluttering',
			japaneseText: 'Tefu tefu ura kara omote e hira hira'
		},
		{
			id: 107,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Today also all day no one came fireflies',
			japaneseText: 'Kyou mo ichinichi dare mo konakatta hotaru'
		},
		{
			id: 108,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Dragonfly trying to light on my stark naked body are you',
			japaneseText: 'Suppadaka e tombo tomarou to suruka'
		},
		{
			id: 109,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Rustling stirring a non-chirping insect has come',
			japaneseText: 'Kasari kosori oto sasete nakanu mushi ga kita'
		},
		{
			id: 110,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Pine winds cool a man eats a horse eats',
			japaneseText: 'Matsukaze suzushiku hito mo tabe uma mo tabe'
		},
		{
			id: 111,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Which is what everything's abloom",
			japaneseText: 'Nani ga nani yara minna saiteiru'
		},
		{
			id: 112,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I walk and buttercups I sit and buttercups',
			japaneseText: 'Arukeba kimpouge suwareba kimpouge'
		},
		{
			id: 113,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'With the drips from the young leaves the drips from my hat',
			japaneseText: 'Wakaba no shizuku de kasa no shizuku de'
		},
		{
			id: 114,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The temple's bamboo shoots have become bamboo",
			japaneseText: 'O-tera no takenoko take ni natta'
		},
		{
			id: 115,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Alone I listen a woodpecker',
			japaneseText: 'Hitori kiiteiru kitsutsuki'
		},
		{
			id: 116,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I'm waiting the cherries are ripening",
			japaneseText: 'Matteiru sakurambo ureteiru'
		},
		{
			id: 117,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "In the mountain's embrace I become naked",
			japaneseText: 'Yama futokoro no hadaka to nari'
		},
		{
			id: 118,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'On the mountain all day ants too are walking',
			japaneseText: 'Yama no ichinichi ari mo aruiteiru'
		},
		{
			id: 119,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Clouds hurry and turn it into a good moon',
			japaneseText: 'Kumo ga isoide yoi tsuki ni suru'
		},
		{
			id: 120,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Always alone and red dragonflies',
			japaneseText: 'Itsumo hitori de akatombo'
		},
		{
			id: 121,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'It moved was a bagworm',
			japaneseText: 'Ugoite minomushi datta yo'
		},
		{
			id: 122,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Grass grows thick that's a place for burning the dead",
			japaneseText: 'Kusa shigeru soko wa shinin o yaku tokoro'
		},
		{
			id: 123,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Morning dew sopping I go where I want',
			japaneseText: 'Asatsuyu shittori ikitai hou e iku'
		},
		{
			id: 124,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Burning heaven with no place to hide the water flows toward me',
			japaneseText: 'Enten kakusu tokoro naku mizu no nagarete kuru'
		},
		{
			id: 125,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The evening shower has washed the eggplants I pick 'em",
			japaneseText: 'Yuudachi ga aratte itta nasu o mogu'
		},
		{
			id: 126,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Crickets there's just enough rice for tomorrow",
			japaneseText: 'Kourogi yo asu no kome dake wa aru'
		},
		{
			id: 127,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I reach figs their ripeness',
			japaneseText: 'Te ga todoku ichijiku no urezama'
		},
		{
			id: 128,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Memories the tides rise at the hometown ferry',
			japaneseText: 'Omoide wa shio michitekuru furusato no watashiba'
		},
		{
			id: 129,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I see the sun off beyond the mountains and eat my meal',
			japaneseText: 'Yama no anata e o-hi-sama o miokuri gohan ni suru'
		},
		{
			id: 130,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Noon too quiet flies know the fly-swatter',
			japaneseText: 'Hiru mo shizukana hae ga haetataki o shitteiru'
		},
		{
			id: 131,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The misery of no longer being able to get drunk the crickets chirp',
			japaneseText: 'Yoenakunatta mijimesa wa korogi ga naku'
		},
		{
			id: 132,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Was so good the evening shower the sounds of water here and there',
			japaneseText: 'Honni yokatta yuudachi no mizuoto ga soko koko'
		},
		{
			id: 133,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Finally the mail came and now only ripe persimmons drop',
			japaneseText: 'Yatto yuubin ga kite sorekara jukushi no ochiru dake'
		},
		{
			id: 134,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Each time a fruit ripens and drops I pick it up',
			japaneseText: 'Urete wa ochiru mi o hirou'
		},
		{
			id: 135,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'After seeing someone off I return alone through the quagmire',
			japaneseText: 'Hito o miokuri hitori de kaeru nukarumi'
		},
		{
			id: 136,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Moonlit night, I wash all the rice I have',
			japaneseText: 'Tsukiyo, aru dake no kome o togu'
		},
		{
			id: 137,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The sky's depth dead leaves sunk in the water",
			japaneseText: 'Sora no fukasa wa ochiba shizundeiru mizu'
		},
		{
			id: 138,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'With the moonlight from behind me I cross the water',
			japaneseText: 'Ushiro kara tsuki no kage suru mizu o wataru'
		},
		{
			id: 139,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Broken with a snap bamboo among bamboo',
			japaneseText: 'Pokiri to orete take ga take no naka'
		},
		{
			id: 140,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The moon goes behind it and there's the thicket's shadow",
			japaneseText: 'Tsuki ga ura e mawareba yabukage'
		},
		{
			id: 141,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'This year too this its last night sleet starts',
			japaneseText: "Kotoshi mo kon'ya giri no mizore to natta"
		},
		{
			id: 142,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Here like this I place myself winter night',
			japaneseText: 'Koko ni koushite watashi oiteiru fuyuyo'
		},
		{
			id: 143,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I get sick and a blue heron comes near',
			japaneseText: 'Yameba aosagi ga sokora made'
		},
		{
			id: 144,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I'm eating sake the mountain's withered",
			japaneseText: 'Sake o tabeteiru yama wa kareteiru'
		},
		{
			id: 145,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The brightness of snow everywhere the quietness',
			japaneseText: 'Yuki no akarusa ga ie ippai no shizukesa'
		},
		{
			id: 146,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Camellias fall the water flows',
			japaneseText: 'Tsubaki no ochiru mizu no nagareru'
		},
		{
			id: 147,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I wake snow falls, not that I'm lonely",
			japaneseText: 'Nezame yuki furu, sabishigaru dewa nai ga'
		},
		{
			id: 148,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The owl in the owl's way I in my way can't sleep",
			japaneseText: 'Fukurou wa fukurou de watashi wa watashi de nemurenai'
		},
		{
			id: 149,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The moon goes behind it still the tree shadow',
			japaneseText: 'Tsuki ga ura e mawattemo kokage'
		},
		{
			id: 150,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The bagworm too dripping spring has come yes',
			japaneseText: 'Minomushi mo shizuku suru haru ga kita zo na'
		},
		{
			id: 151,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Grasses and trees alive I'm back they luxuriate",
			japaneseText: 'Kusa ya ki ya ikite modotte shigetteiru'
		},
		{
			id: 152,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Ill alone a morning turns into evening green leaves',
			japaneseText: 'Yamite hitori no asa ga yuube to nariyuku aoba'
		},
		{
			id: 153,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The persimmon's young leaves glitter in the sky I'm yet not dead",
			japaneseText: 'Kaki no wakaba no kagayaku sora o shinazuni iru'
		},
		{
			id: 154,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Bees butterflies grasses so many blooming',
			japaneseText: 'Hachi ga tefucho ga kusa ga nambo demo saite'
		},
		{
			id: 155,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Always chained the dog has no choice but to bark',
			japaneseText: 'Itsumo tsunagarete hoeru hoka nai inu desu'
		},
		{
			id: 156,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Sprouting growing blooming happiness',
			japaneseText: 'Haete nobite saiteiru koufuku'
		},
		{
			id: 157,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Their shadows distinct the young leaves',
			japaneseText: 'Kage mo hakkiri to wakaba'
		},
		{
			id: 158,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Suddenly out of a hole a lizard is it',
			japaneseText: 'Hyoito ana kara tokage ka yo'
		},
		{
			id: 159,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Peckers and pussies overflowing hot water',
			japaneseText: 'Chimpoko mo ososo mo waite afureru yu'
		},
		{
			id: 160,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Alone hushed a bamboo shoot grows to become bamboo',
			japaneseText: 'Hitori hissori takenoko take ni naru'
		},
		{
			id: 161,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "A mountain peers from behind a mountain the rainy season's over",
			japaneseText: 'Yama kara yama ga nozoite tsuyubare'
		},
		{
			id: 162,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'With something to eat something to drink in the weeds rain',
			japaneseText: 'Taberu mono wa atte you mono mo atte zassou no ame'
		},
		{
			id: 163,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Under burning heaven an endless line of ants',
			japaneseText: 'Enten no hate mo naku ari no gyouretsu'
		},
		{
			id: 164,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The spider spreads his net I affirm myself',
			japaneseText: 'Kumo wa ami haru watashi wa watashi o kouteisuru'
		},
		{
			id: 165,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Ready to die any moment grass blooms bears seeds',
			japaneseText: 'Itsu de mo shineru kusa ga saitari minottari'
		},
		{
			id: 166,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The sun at its most intense one leaf falls',
			japaneseText: 'Hizakari ochiru ha no ichimai'
		},
		{
			id: 167,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A cool wind passes so do bees so do dragonflies',
			japaneseText: 'Kaze ga suzushiku fukinukeru node hachi mo tombo mo'
		},
		{
			id: 168,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Drink hometown's water bathe in the water",
			japaneseText: 'Furusato no mizu o nomi mizu o abi'
		},
		{
			id: 169,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Make this the place to die grasses luxuriate luxuriate',
			japaneseText: 'Koko o shini basho to shite kusa no shigeri ni shigeri'
		},
		{
			id: 170,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In an autumn wind, an angry praying mantis this',
			japaneseText: 'Akikaze no, haratateteiru kamakiri de'
		},
		{
			id: 171,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Burdened with a heavy load he's blind",
			japaneseText: 'Omoni o oute mekura de aru'
		},
		{
			id: 172,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The road where we parted straight',
			japaneseText: 'Wakaretekita michi ga massugu'
		},
		{
			id: 173,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Wake from a nap whichever way I look mountains',
			japaneseText: 'Hirune samete dochira o mite mo yama'
		},
		{
			id: 174,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A good inn mountains everywhere and a sake store in front',
			japaneseText: 'Yoi yado de dochira mo yama de mae wa sakaya de'
		},
		{
			id: 175,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I sit and there's a wind autumn weeds",
			japaneseText: 'Suwareba kaze ga aru aki no zassou'
		},
		{
			id: 176,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I decide to sleep here grass seeds spill',
			japaneseText: 'Koko de neru to suru kusa no mi no koboreru'
		},
		{
			id: 177,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Bush clover and pampas grass are today's road",
			japaneseText: 'Hagi ga susuki ga kyou no michi'
		},
		{
			id: 178,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Leaves fall fall into my alms bowl too',
			japaneseText: 'Ki no ha furu furu hachinoko e mo'
		},
		{
			id: 179,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I walk and grass seeds I sit and grass seeds',
			japaneseText: 'Arukeba kusa no mi suwareba kusa no mi'
		},
		{
			id: 180,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Now, which way shall I go the wind blows',
			japaneseText: 'Sate, dochira e iko kaze ga fuku'
		},
		{
			id: 181,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "There's only this road spring snow falls",
			japaneseText: 'Kono michi shika nai haru no yuki furu'
		},
		{
			id: 182,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Because the mountain's quiet I take off my hat",
			japaneseText: 'Yama shizuka nareba kasa o nugu'
		},
		{
			id: 183,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The two or three left become ripe persimmons clouds come and go',
			japaneseText: 'Nokosareta futatsu mittsu ga jukushi to naru kumo no yukiki'
		},
		{
			id: 184,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'No one comes cayenne peppers turn red',
			japaneseText: 'Dare mo konai tougarashi akou naru'
		},
		{
			id: 185,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I take ill and the pickled plums' red",
			japaneseText: 'Yameba umeboshi no akasa'
		},
		{
			id: 186,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "No matter how I think it's all the same I step on dead leaves and walk on",
			japaneseText: 'Nambo kangaete mo onnaji koto no ochiba fumi aruku'
		},
		{
			id: 187,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I lie down I get up leaves fall',
			japaneseText: 'Netari okitari ochiba suru'
		},
		{
			id: 188,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Wide awake and feeling the moon right above',
			japaneseText: 'Hokkari samete maue no tsuki o kanjiteiru'
		},
		{
			id: 189,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Withering grass I sit on its beauty',
			japaneseText: 'Kareyuku kusa no utsukushisa ni suwaru'
		},
		{
			id: 190,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I live withdrawn and a wren',
			japaneseText: 'Hissori kuraseba misosazai'
		},
		{
			id: 191,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Dangling the snow falling on a bagworm',
			japaneseText: 'Burari to sagatte yuki furu minomushi'
		},
		{
			id: 192,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Just as they are weeds sprout',
			japaneseText: 'Aru ga mama zassou to shite me o fuku'
		},
		{
			id: 193,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'From the mountain white flowers to my desk',
			japaneseText: 'Yama kara shiroi hana o tsukue ni'
		},
		{
			id: 194,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Into the sky young bamboo with no troubling thoughts',
			japaneseText: 'Sora e wakatake no nayami mo nashi'
		},
		{
			id: 195,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Around me all grasses every one blooming',
			japaneseText: 'Mi no mawari kusa darake minna saiteru'
		},
		{
			id: 196,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "I roll on my back and there's the blue sky",
			japaneseText: 'Korori nekorobeba aozora'
		},
		{
			id: 197,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Seeking what I go through the wind',
			japaneseText: 'Nani o motomeru kaze no naka yuku'
		},
		{
			id: 198,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In the depths of the green leaves the path still then a grave',
			japaneseText: 'Aoba no oku e nao michi ga atte haka'
		},
		{
			id: 199,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The moon before you know it brightens and katydids',
			japaneseText: 'Tsuki ga itsushika akarukunareba kirigirisu'
		},
		{
			id: 200,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Butterflies entangling in the shadow in the sun',
			japaneseText: 'Tefutefu motsuretsutsu kagehinata'
		},
		{
			id: 201,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Once you die, weeds rain falls',
			japaneseText: 'Shindeshimaeba, zassou ame furu'
		},
		{
			id: 202,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Before death a cool breeze',
			japaneseText: 'Shi o mae ni suzushii kaze'
		},
		{
			id: 203,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Even while wind chimes tinkle death sneaks up',
			japaneseText: 'Fuurin no naru sae shi no shinobiyoru'
		},
		{
			id: 204,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Have no thoughts to leave the evening's sweet potato leaves aflutter",
			japaneseText: 'Omoi oku koto wa nai yuube no imo no ha hirahira'
		},
		{
			id: 205,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The wound healing turning autumnal the wind blows',
			japaneseText: 'Kizu ga ieyuku aki meita kaze to natte kaze fuku'
		},
		{
			id: 206,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I walk and cuckoos I hurry and cuckoos',
			japaneseText: 'Arukeba kakkou isogeba kakkuu'
		},
		{
			id: 207,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Heart empty the rough waves rolling in rolling out',
			japaneseText: 'Kokoro munashiku aranami no yosete wa kaeshi'
		},
		{
			id: 208,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Crouched on a dune today I still can't see Sado",
			japaneseText: 'Sakyuu ni uzukumari kyou mo Sado wa mienai'
		},
		{
			id: 209,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Legs stretched toward the rough sea before and after the journey',
			japaneseText: 'Araumi e ashi nagedashite tabi no atosaki'
		},
		{
			id: 210,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Having come this far I drink water and leave',
			japaneseText: 'Koko made o koshi mizu nonde saru'
		},
		{
			id: 211,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A butterfly aflutter has gone over the roof tiles',
			japaneseText: 'Tefutefu hirahira iraka o koeta'
		},
		{
			id: 212,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Sobering a wind sadly blows through me',
			japaneseText: 'Yoizame no kaze no kanashiku fukinukeru'
		},
		{
			id: 213,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'My heart calms down and the sound of the water',
			japaneseText: 'Kokoro ochitsukeba mizu no oto'
		},
		{
			id: 214,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I follow the bright and dark sides of a wind',
			japaneseText: 'Kaze no meian o tadoru'
		},
		{
			id: 215,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'From the moon flutters down a persimmon leaf',
			japaneseText: 'Tsuki kara hirari to kaki no ha'
		},
		{
			id: 216,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Waiting for what day by day dead leaves grow deep',
			japaneseText: 'Nani o matsu hi ni hi ni ochiba fukounaru'
		},
		{
			id: 217,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Drying up the water's clarity",
			japaneseText: 'Karetekuru mizu no sumi yo'
		},
		{
			id: 218,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Wash 'em and daikon grow even more white",
			japaneseText: 'Araeba daikon iyoiyo shiroshi'
		},
		{
			id: 219,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "With a shadow too desultorily late night I'm eating",
			japaneseText: 'Kage mo bosoboso yofuke no watashi ga tabeteiru'
		},
		{
			id: 220,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I know the footfalls stepping on the fallen leaves coming closer',
			japaneseText: 'Ochiba fumikuru sono ashioto wa shitteiru'
		},
		{
			id: 221,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "After all being alone's lonesome the withered grass",
			japaneseText: 'Yappari hitori wa samishii karekusa'
		},
		{
			id: 222,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Leaves fallen all the more intimate my neighbor's light",
			japaneseText: 'Ochiba shite sarani shitashiku otonari no hi no'
		},
		{
			id: 223,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Out of the wind caw caw crows',
			japaneseText: 'Kaze no naka kara kaakaa karasu'
		},
		{
			id: 224,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The leaves fallen no more leaves to fall the sun',
			japaneseText: 'Ha no ochite ochiru ha wa nai taiyou'
		},
		{
			id: 225,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Snow falls I have things to eat snow falls',
			japaneseText: 'Yuki furu taberu mono wa atte yuki furu'
		},
		{
			id: 226,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Moon's brightness I wonder where they're bombing",
			japaneseText: 'Tsuki no akarusa wa doko o bakugeki shiteiru koto ka'
		},
		{
			id: 227,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Snow falling on snow battle is about to begin they say',
			japaneseText: 'Yuki e yuki furu tatakai wa kore kara da to iu'
		},
		{
			id: 228,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The town's festive you've returned as bones have you",
			japaneseText: 'Machi wa omatsuri o-hone to natte kaeraretaka'
		},
		{
			id: 229,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Horse too requisitioned grandpa grandma',
			japaneseText: 'Uma mo mesarete ojiisan obasan'
		},
		{
			id: 230,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Legs and arms left in China you are back to Japan',
			japaneseText: 'Ashi wa te wa Shina ni nokoshite futatabi Nihon ni'
		},
		{
			id: 231,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Wordlessly playing a single bird in the blossoms',
			japaneseText: 'Damatte asubu tori no ichiwa ga hana no naka'
		},
		{
			id: 232,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "The spring wind's bagworm has taken a sudden peek",
			japaneseText: 'Harukaze no minomushi hyoito nozoita'
		},
		{
			id: 233,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Taking a sudden peek the bagworm doesn't cry",
			japaneseText: 'Hyoito nozoite minomushi wa nakanai'
		},
		{
			id: 234,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The green of the grass I return barefoot',
			japaneseText: 'Kusa no aosa yo hadashi de modoru'
		},
		{
			id: 235,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In rows bamboo shoots turning into bamboo',
			japaneseText: 'Narande takenoko take ni naritsutsu'
		},
		{
			id: 236,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'In the wind I walk blaming myself',
			japaneseText: 'Kaze no naka onore o semetsutsu aruku'
		},
		{
			id: 237,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Winter shower all the rice I got cooked good',
			japaneseText: 'Shigururu ya aru dake no gohan yo taketa'
		},
		{
			id: 238,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Death held tight the cayenne pepper scarlet',
			japaneseText: 'Shi o hishi to tougarashi makka na'
		},
		{
			id: 239,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Death's stillness is the clear sky a leafless tree",
			japaneseText: 'Shi no shizukesa wa harete ha no nai ki'
		},
		{
			id: 240,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'There in front of death I put the moon',
			japaneseText: 'Soko ni tsuki o shi no mae ni oku'
		},
		{
			id: 241,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'I open the window the spring filling the window',
			japaneseText: 'Mado akete mado ippai no haru'
		},
		{
			id: 242,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Stillness, bamboo shoots have all turned into bamboo',
			japaneseText: 'Shizukesa, takenoko minna take ni natta'
		},
		{
			id: 243,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Living alone and green green is the grass',
			japaneseText: 'Hitori sumeba aoao to shite kusa'
		},
		{
			id: 244,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'A hop a single red frog',
			japaneseText: 'Tonde ippiki akagaeru'
		},
		{
			id: 245,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Near my body water comes flowing',
			japaneseText: 'Mi no chikaku mizu no nagarete kuru'
		},
		{
			id: 246,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'From somewhere clouds appear autumn clouds',
			japaneseText: 'Doko kara tomo naku kumo ga detekite aki no kumo'
		},
		{
			id: 247,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Autumn wind, whichever way I want to go as far as I can go',
			japaneseText: 'Akikaze, ikitai hou e ikeru tokoro made'
		},
		{
			id: 248,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Since I stopped coming across people the mountain butterflies',
			japaneseText: 'Hito ni awanakunarite yori yama no tefutefu'
		},
		{
			id: 249,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'With this body that can die any place spring wind',
			japaneseText: 'Doko demo shineru karada de shumpuu'
		},
		{
			id: 250,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Balmy the butterfly is dead',
			japaneseText: 'Uraura chou wa shindeiru'
		},
		{
			id: 251,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Cherry blossoms at their peak a prison',
			japaneseText: 'Sakura mankai ni shite keimusho'
		},
		{
			id: 252,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Of the house where I was born no trace left fireflies',
			japaneseText: 'Umareta ie wa atokata mo nai hotaru'
		},
		{
			id: 253,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Water's delicious frog croak",
			japaneseText: 'Mizu no umasa o kawazu naku'
		},
		{
			id: 254,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Letting the moon as far as my bed I decide to sleep',
			japaneseText: 'Nedoko made tsuki o ire neru koto ni suru'
		},
		{
			id: 255,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The darkness of the rice trusty I wash it',
			japaneseText: 'Kome no kurosa mo tanomoshiku arau'
		},
		{
			id: 256,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'My bellybutton a pool of sweat',
			japaneseText: 'Heso ga ase tameteiru'
		},
		{
			id: 257,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Walls crumbling from there vine grass',
			japaneseText: 'Kabe ga kuzurete soko kara tsurugusa'
		},
		{
			id: 258,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "That's a pre-death butterfly dance",
			japaneseText: 'Sore wa shi no mae no tefutefu no mai'
		},
		{
			id: 259,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Autumn's end-turned-fly crawls about",
			japaneseText: 'Aki mo owari no hae to nari haiaruku'
		},
		{
			id: 260,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Moon invisible moonlit water brimming',
			japaneseText: 'Tsuki wa mienai tsukiakari no mizu manman'
		},
		{
			id: 261,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Cawing a crow, flapping a crow, with no place to settle down',
			japaneseText: 'Naite karasu no, tonde karasu no, ochitsuku tokoro ga nai'
		},
		{
			id: 262,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'The sound of water today too alone I travel',
			japaneseText: 'Mizuoto kyou mo hitori tabi yuku'
		},
		{
			id: 263,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Mountain's quietness the white flower",
			japaneseText: 'Yama no shizukesa wa shiroi hana'
		},
		{
			id: 264,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "Can't calm down the futon heavy I sleep",
			japaneseText: 'Ochitsukenai futon omotaku neru'
		},
		{
			id: 265,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: 'Under burning heaven the railway track straight',
			japaneseText: 'Enten no reeru massugu'
		},
		{
			id: 266,
			editing: false,
			translatorId: 3,
			publicationId: 3,
			englishText: "A crow flies away I'll cross the water",
			japaneseText: 'Karasu tondeyuku mizu o wataro'
		},
		{
			id: 267,
			editing: false,
			translatorId: 5,
			publicationId: 4,
			englishText: 'where the walls are\nvines the grass',
			japaneseText: 'falling apart the'
		},
		{
			id: 268,
			editing: false,
			translatorId: 5,
			publicationId: 4,
			englishText: 'and the shadows too',
			japaneseText: 'men women\ndancing'
		},
		{
			id: 269,
			editing: false,
			translatorId: 5,
			publicationId: 4,
			englishText: 'the waves sound sometimes\nclose and sometimes far away\nhow much more of life'
		},
		{
			id: 270,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Pine trees\nWith branches all drooping--\nNamu-kanzeon sutra.',
			japaneseText: 'Matsu wa mina/ eda tarete/ namu-kanzeon'
		},
		{
			id: 271,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Ringing the temple-bell\nTo the sound of pine trees;\nMornings and evenings.',
			japaneseText: 'Matsukaze ni/ ake kure no/ kane tsuite'
		},
		{
			id: 272,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Sweeping the yard for a change,\nFlowers in the hedge are in bloom.',
			japaneseText: 'Hisashiburini haku/ kakine no hana ga saita'
		},
		{
			id: 273,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText:
				'Getting further and further\nInto the mountains,\nBut still deep blue mountains.',
			japaneseText: 'Wakeittemo/ wakeittemo/ aoi yama'
		},
		{
			id: 274,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Soaked and Soggy to the core,\nIt's a milestone.",
			japaneseText: 'Shitodo ni nurete/ korewa michishirube no ishi'
		},
		{
			id: 275,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Under the canopy of scorching heaven\nI walk and beg.',
			japaneseText: 'Enten wo itadaite/ koi aruku'
		},
		{
			id: 276,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Lone crow is cawing;\nI'm alone too.",
			japaneseText: 'Karasu naite/ watashi mo hitori'
		},
		{
			id: 277,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "In the midst of life and death\nSnow's falling thick and fast.",
			japaneseText: 'Shoji no naka no/ yuki furishikiru'
		},
		{
			id: 278,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Leaves are falling;\nI walk and walk.',
			japaneseText: 'Konoha chiru/ aruki tsumeru'
		},
		{
			id: 279,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'All alone,\nLetting mosquitoes bite my flesh.',
			japaneseText: 'Hitoride/ ka ni kuwareteiru'
		},
		{
			id: 280,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Stretching my legs\nTo the light of a westering sun.',
			japaneseText: 'Nagedashite/ mada hi no aru ashi'
		},
		{
			id: 281,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Walking with a dragonfly\nResting on my sedge-hat.',
			japaneseText: 'Kasa ni tombo wo/ tomarasete/ aruku'
		},
		{
			id: 282,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText:
				"It's a straight road\nThat makes me feel lonely.\nIt's a lonely road that has no turning."
		},
		{
			id: 283,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'In silence\nI put on straw sandals for today.',
			japaneseText: 'Damatte/ kyo no waraji haku'
		},
		{
			id: 284,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Late autumn rain's falling;\nI have yet to die.",
			japaneseText: 'Shigururu ya/ shinanai de iru'
		},
		{
			id: 285,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'My shadow on the water,\nTraveler I am.',
			japaneseText: 'Mizu ni kage aru/ tabibito de aru'
		},
		{
			id: 286,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Late autumn rain's falling\nInto the mountain,\nTowards which I go on walking.",
			japaneseText: 'Shigururu ya/ shigururu yama e/ ayumi iru'
		},
		{
			id: 287,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Buds of trees,\nBuds of grasses,\nI keep on walking.',
			japaneseText: 'Kinome/ kusanome/ aruki tsuzukeru'
		},
		{
			id: 288,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I've survived--\nScratching my body.",
			japaneseText: 'Iki nokotta karada/ kaite iru'
		},
		{
			id: 289,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Mountains I've left for good\nAre going out of sight.",
			japaneseText: 'Mata miru koto mo nai yama ga/ toozakaru'
		},
		{
			id: 290,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Crickets are chirping,\nChirping to me all the time.',
			japaneseText: 'Koorogi ni/ nakarete bakari'
		},
		{
			id: 291,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Shrike is chirping;\nNo place to throw away myself.',
			japaneseText: 'Mozu maite/ mi no sutedokoro nashi'
		},
		{
			id: 292,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Slipped, tumbled,\nMountain is quiet and alone.',
			japaneseText: 'Subette koronde/ yama ga hissori'
		},
		{
			id: 293,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'My tired legs--\nDragonfly landed on one.',
			japaneseText: 'Tsukareta ashi e/ tombo tomatta'
		},
		{
			id: 294,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Monk-robe\nThreadbare so--\nGrass seeds.',
			japaneseText: 'Houe/ konnani yaburete/ kusa no mi'
		},
		{
			id: 295,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Behind the rocks,\nSure enough, a fountain;\nEureka!',
			japaneseText: 'Yuwa kage/ masashiku/ mizu ga waite iru'
		},
		{
			id: 296,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Those clouds threw a rain shower;\nI'm wet through.",
			japaneseText: 'Ano kumo ga/ otoshita ane ni/ nurete iru'
		},
		{
			id: 297,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Autumn is come;\nSitting on the weeds.',
			japaneseText: 'Aki to natta/ zasso ni suwaru'
		},
		{
			id: 298,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Water so tasty,\nFlowing all over.',
			japaneseText: 'Konnani umai mizu ga/ afurete iru'
		},
		{
			id: 299,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Have come down to the village\nWith the sound of water.',
			japaneseText: 'Mizuoto to isshoni/ sato e orite kita'
		},
		{
			id: 300,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "No clouds whatsoe'er,\nI took off my sedge-hat.",
			japaneseText: 'Mattaku kumo ga nai/ kasa wo nugi'
		},
		{
			id: 301,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Drunk,\nFound myself sleeping with crickets.',
			japaneseText: 'Youte/ koorogi to/ nete itayo'
		},
		{
			id: 302,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Sound of raindrops,\nYou're getting old, too.",
			japaneseText: 'Amadare no oto mo/ toshi totta'
		},
		{
			id: 303,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "No more doors to beg,\nClouds o'er the mountains.",
			japaneseText: 'Mono gou ie mo nakunari/ yama niwa kumo'
		},
		{
			id: 304,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: '--Reminiscence--\nMy sedge-hat\nGetting leaky at last.',
			japaneseText: 'Kasa mo/ moridashita ka'
		},
		{
			id: 305,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "--Self-ridicule--\nI'm leaving\nWith my backside wet\nIn late autumn rain.",
			notes:
				"Note: Another self of Santoka's is watching himself from behind with\nself-scorn. He is dual-eyed, before and hind, like a frog\nor a dragonfly.",
			japaneseText: 'Ushiro sugata no/ shigurete yuku ka'
		},
		{
			id: 306,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Into begging bowl of iron\nDown came the hailstones.',
			japaneseText: 'Teppachu no naka e mo arare'
		},
		{
			id: 307,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'My native town\nFar, far away--\nBurgeoning trees.',
			japaneseText: 'Furusato wa/ tooku shite/ ki no me'
		},
		{
			id: 308,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Getting out of a nice bath\nInto lovely moonlight.',
			japaneseText: 'Yoi yu kara/ yoi tsuki e deta'
		},
		{
			id: 309,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Among budding trees\nBirds are now singing.',
			japaneseText: 'Haya mebuku ki de/ naite iru'
		},
		{
			id: 310,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Something fell on my sedge-hat--\nCamellia.',
			japaneseText: 'Kasa e pottori/ tsubaki datta'
		},
		{
			id: 311,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Eating fully enough with thanks,\nI put down chopsticks;\nAll alone.',
			japaneseText: 'Itadaite/ tarite hitori no/ hashi wo oku'
		},
		{
			id: 312,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'In autumn wind\nI pick up a pebble.',
			japaneseText: 'Akikaze no/ ishi wo hirou'
		},
		{
			id: 313,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Alongside today's road\nDandelions in bloom.",
			japaneseText: 'Kyo nomichi no/ tampopo saita'
		},
		{
			id: 314,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "It's raining in my hometown;\nI'm walking barefoot.",
			japaneseText: 'Ame furu furusato wa/ hadashi de aruku'
		},
		{
			id: 315,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText:
				"Having moved in and settled down,\nI'm surrounded by flowers of the opposite shore/\nflowers of the autumnal equinox.*",
			japaneseText: 'Utsuri kite/ o-higanbana no/ hana zakari',
			notes:
				'*opposite shore (Higan)--Buddhistic term.\nautumnal equinox (Higan/Shuubun-no-hi)--day on the calendar.'
		},
		{
			id: 316,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText:
				'Glory of the morning sky\nHeralds the coming of rain;\nMust sow the seeds of radish.',
			japaneseText: 'Asayake/ ame furu/ daikon makou'
		},
		{
			id: 317,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Out of the evening sky\nI pick and pluck a yuzu-citrus.*',
			notes:
				"*Yuzu--yellow, sour and fragrant citrus resembling a lemon, not oval\nbut round and softer. It is symbolic of Japan's winter.\nYuzu-trees, together with persimmon-trees, are seen in the yards of\nrural houses--typical scenery of Japan's countryside just as the\napple tree is to the West. On the day of winter solstice, it is the\ncustom with the Japanese to enjoy yuzu-bath (Yuzu-yu) either in the\nhousehold or in public bathhouses (Sentoh). Urban dwellers can get\nyuzu at stores. Yuzu is also used as healthy natural vinegar. A\ngood subject (season-word) for Haiku. Lots of Haikuists like to\ncompose yuzu-ku around this season. (T. Nonin)",
			japaneseText: 'Yuuzora kara/ yuzu no hitotsu wo morau'
		},
		{
			id: 318,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Tea-blossoms keep falling--\nLet them fall as they do.',
			japaneseText: 'Cha-no-hana no/ chiru bakari/ chirashite oku'
		},
		{
			id: 319,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Winter is come;\nSticks of wood,\nSticks of bamboo.',
			japaneseText: 'Fuyu ga kiteiru/ kigire/ takegire'
		},
		{
			id: 320,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "The moon has risen;\nI'm awaiting nobody and nothing.",
			japaneseText: 'Tsuki ga nobotte/ nani wo matsu deno naku'
		},
		{
			id: 321,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "There's something to eat,\nThis and that--\nWindy all day.",
			japaneseText: 'Are kore/ taberumo wa atte/ kaze no ichinichi'
		},
		{
			id: 322,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Sound of water--\nI'm truly settled down and relaxed.",
			japaneseText: 'Mizuoto/ shinjitsu/ ochitsuki mashita'
		},
		{
			id: 323,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Falling leaves--\nFar beyond,\nI see Buddha.',
			japaneseText: 'Ochiba furu oku fukaku/ mi-hotoke wo miru'
		},
		{
			id: 324,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Snow is falling\nAll around Gochu hermitage;\nI build a fire as a lonely self.',
			japaneseText: 'Gochu yuki furu/ hitori to shite/ hi wo taku'
		},
		{
			id: 325,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Warm day,\nI have something more to eat.',
			japaneseText: 'Nukui hi no/ mada taberumono wa aru'
		},
		{
			id: 326,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Snow's falling on snow,\nI'm in quietude.",
			japaneseText: 'Yuki e yuki furu/ shizukesa ni oru'
		},
		{
			id: 327,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Moonlit night,\nHe came with a handout gift;\nI found 'twas rice.",
			japaneseText: 'tsukiyo/ temiyage wa/ kome datta-ka'
		},
		{
			id: 328,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Camellias are in bloom;\nThere are tombstones.',
			japaneseText: 'Tsubaki hiraite/ haka ga aru'
		},
		{
			id: 329,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'A tiny vase,\nA twig of camellia in it.',
			japaneseText: 'Ichirin-zashi no/ tsubaki ichirin'
		},
		{
			id: 330,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "What's that sound--\nMust be a bird\nEating berries since morning.",
			japaneseText: 'Oto wa/ asa kara kinomi wo tabe ni kita tori ka'
		},
		{
			id: 331,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Uprooted many a time,\nDiehard is the weed;\nI pull out its tenacity.',
			japaneseText: 'Nuitemo/ nuitemo/ kusa no shuuchaku wo nuku'
		},
		{
			id: 332,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Today I picked butterburrs,\nAte butterburrs.',
			japaneseText: 'Kyo wa/ fuki wo tsumi/ fuki wo tabe'
		},
		{
			id: 333,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Sparrows dance,\nDandelions fall.',
			japaneseText: 'Suzume odoru ya/ tanpopo chiru ya'
		},
		{
			id: 334,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Morn is about to dawn,\nWindows just opened--\nFresh young leaves.',
			japaneseText: 'Mou ake souna/ mado akete/ aoba'
		},
		{
			id: 335,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Long hair...\nGray.',
			japaneseText: 'Nagai ke ga/ shiraga'
		},
		{
			id: 336,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I'm true and obedient to my mind;\nRice has just been cooked well.",
			japaneseText: 'kokoro sunaoni/ gohan ga fuita'
		},
		{
			id: 337,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "It's good after all\nTo be all by myself--\nWeeds.",
			japaneseText: 'Yappari/ hitori ga yoroshii/ zasso'
		},
		{
			id: 338,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Whole day long\nNo one has come today--\nFirelies.',
			japaneseText: 'Kyo mo ichinichi/ dare mo konakatta/ houtaru'
		},
		{
			id: 339,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Stark naked I am,\nDragonfly trying to land on me.',
			japaneseText: 'Suppadaka e/ tombo tomarou to suru ka'
		},
		{
			id: 340,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Making a rustling sound,\nMute insect has come.',
			japaneseText: 'Kasari kosori/ oto sasete/ nakanu mushi ga kita'
		},
		{
			id: 341,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Wind through the pines;\nCool--\nPeople eat, horses eat.',
			japaneseText: 'matsukaze suzushiku/ hito mo tabe/ uma mo tabe'
		},
		{
			id: 342,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'All day long, today\nI have walked in the wind.',
			japaneseText: 'Kyo mo ichinichi/ Kaze wo aruite kita'
		},
		{
			id: 343,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "What's this? What's that?\nEverything is blooming.",
			japaneseText: 'Nani ga nani yara/ minna saite iru'
		},
		{
			id: 344,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'When I walk, I see buttercups;\nWhen I sit, I see buttercups.',
			japaneseText: 'Arukeba kinpohge/ suwareba kinpohge'
		},
		{
			id: 345,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Thistles--\nBright in the morning\nAfter the rain.',
			japaneseText: 'Azami azayakana/ asa no ame agari'
		},
		{
			id: 346,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Hanging down my head,\nI see nothing but pebbles.',
			japaneseText: 'Utsumuite/ ishikoro bakari'
		},
		{
			id: 347,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Drippings from young leaves,\nDrippings from my bamboo-hat.',
			japaneseText: 'Wakaba no shizuku de/ kasa no shizuku de'
		},
		{
			id: 348,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Come on, fireflies, come on;\nI've come to my native town.",
			japaneseText: 'Houtaru koi koi/ furusato ni kita'
		},
		{
			id: 349,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Bamboo sprouts of the temple\nHave grown into bamboos.',
			japaneseText: 'Otera no takenoko/ take ni natta'
		},
		{
			id: 350,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Wind through the pines,\nShadows of the pines;\nI'm lying down in the shade.",
			japaneseText: 'Matsukaze matsukage/ nekoronde'
		},
		{
			id: 351,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Day is breaking;\nI whet a sickle.',
			japaneseText: 'Akete kuru/ kama wo togu'
		},
		{
			id: 352,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I'm listening alone--\nWoodpecker.",
			japaneseText: 'Hitori kiite ite/ kitsutsuki'
		},
		{
			id: 353,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'The spa--\nGushing out and overflowing:\nI immerse my body in it.',
			japaneseText: 'Waite afureru nakani/ neteiru'
		},
		{
			id: 354,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I'm waiting;\nCherries are ripe.",
			japaneseText: 'Matte iru/ sakuranbo urete iru'
		},
		{
			id: 355,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Nestling down in the mountain (spa),\nI doff my clothes.',
			japaneseText: 'Yama futokoro no/ hadaka to nari'
		},
		{
			id: 356,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'A whole day in the mountains;\nAnts are walking, too.',
			japaneseText: 'Yama no ichinichi/ ari mo aruite iru'
		},
		{
			id: 357,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Clouds are sailing fast\nTo make the moon look better.',
			japaneseText: 'Kumo ga isoide/ yoi tsuki ni suru'
		},
		{
			id: 358,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I'm always alone,\nRed dragonfly.",
			japaneseText: 'Itsumo hitori de/ akatombo'
		},
		{
			id: 359,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "I'm on travel;\nUntil my monk's robe dries up,\nWind comes from the weeds.",
			japaneseText: 'Tabi no houe ga/ kawaku made/ zasso no kaze'
		},
		{
			id: 360,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'It wiggles;\nA bagworm.',
			japaneseText: 'Ugoite/ minomushi datta yo'
		},
		{
			id: 361,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Across the water\nLights of the brothels\nBegan to twinkle.',
			japaneseText: 'Mizu wo hedatete/ onagoya no hi ga/matataki dashita'
		},
		{
			id: 362,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'The mountains\nHazed and overlapped--\nMy home town.',
			japaneseText: 'Kasunde Kasanatte/ yama ga furusato'
		},
		{
			id: 363,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'In the spring breeze\nOne begging-bowl is there.',
			japaneseText: 'Harukaze no/ hachinoko hitotsu'
		},
		{
			id: 364,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText:
				"--Returning to my hermitage--\nI'm home after a long absence;\nBamboo sprouts are shooting forth\nEverywhere.",
			japaneseText: 'Hisabisa modoreba/takenoko nyoki nyoki'
		},
		{
			id: 365,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Soaked with rain and sweat,\nPlough-horse gets many a scolding.',
			japaneseText: 'Bisshori nurete/ shiro kaku uma wa/ shikararete bakari'
		},
		{
			id: 366,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Rain and shine--\nThe fields have turned\nInto green paddies.',
			japaneseText: 'Haretari futtari/ aota ni natta'
		},
		{
			id: 367,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "A thicket--\nThat's the place\nCorpses are cremated.",
			japaneseText: 'kusa shigeru/ soko wa shinin wo/ yaku tokoro'
		},
		{
			id: 368,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Wet with morning dew,\nI take a wayward course.',
			japaneseText: 'Asatsuyu shittori/ Ikitai hou e iku'
		},
		{
			id: 369,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'Little cuckoos--\nI will go beyond\nThat mountain morrow.',
			japaneseText: 'Hototogisu/ asu wa ano yama/ koete ikou'
		},
		{
			id: 370,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: "Doffing my bamboo-hat,\nI'm thoroughly wet.",
			japaneseText: 'Kasa wo nugi/ shimizimi to nure'
		},
		{
			id: 371,
			editing: false,
			translatorId: 6,
			publicationId: 5,
			englishText: 'cockroach!\nyour whiskers are long\nand so are mine',
			japaneseText: 'Aburamushi/ omae no hige mo/ nobite iru'
		},
		{
			id: 372,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'This\njourney\nwithout\ngoal\nweeping\nlocust.'
		},
		{
			id: 373,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'Between life\ndeath/snow\nstill falling.'
		},
		{
			id: 374,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'Road\nno end\nloneliness.'
		},
		{
			id: 375,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'On my straw\nhat\ndragonfly clings\nkeep walking.'
		},
		{
			id: 376,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'In this\nblizzard\ntry to\nsleep,\nnot die.'
		},
		{
			id: 377,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'Rain\nfalling on\nhome\ncountry\nwalk barefoot/here.'
		},
		{
			id: 378,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'Push\napart\nstep\nthru\npush\napart\nstep\nthru\nblue-green\nmountain.',
			notes: 'The difficulty in finding an English equivalent to Santoka'
		},
		{
			id: 379,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'These\nmy hands\nthese\nmy feet\nwarm inside'
		},
		{
			id: 380,
			editing: false,
			translatorId: 7,
			publicationId: 6,
			englishText: 'All night\nlong\ndogs bark,\nI walk.'
		},
		{
			id: 381,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "Unpleasant days:\ndays I don't walk, days without booze,\nhaikuless days."
		},
		{
			id: 382,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText:
				'Sake for flesh, haiku for soul:\nsake is the haiku of the flesh\nhaiku is the sake of the soul.'
		},
		{
			id: 383,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Walking on and on -\nmy only course.'
		},
		{
			id: 384,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'So this is what\nhe calls his "tea grove" -\none miserable bush!'
		},
		{
			id: 385,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'No water but that\ntrickling from\nthe farmer in the dry ricefield.'
		},
		{
			id: 387,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The thistles -\nfresh and sparkling\nafter morning rain.'
		},
		{
			id: 388,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'At the mountain-foot\nmany graves resting\nin the warm sunlight.'
		},
		{
			id: 389,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'This road straight -\nand empty of company.'
		},
		{
			id: 390,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Going deeper\nand still deeper\ninto green mountains.'
		},
		{
			id: 391,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The sunshine freshly\nreflecting from\nmy freshly-shaven head.'
		},
		{
			id: 392,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Begging: I accept\nthe burning sun.'
		},
		{
			id: 393,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'One pot is enough;\nI wash the rice.'
		},
		{
			id: 394,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Shining brightly in the sunshine:\nmy little bowl of rice.'
		},
		{
			id: 395,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Within life and death\nsnow ceaselessly falls.'
		},
		{
			id: 396,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'I have no home;\nautumn gets bleaker.'
		},
		{
			id: 397,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Worn and torn daily\nand falling in shreds:\nmy cloak for travelling.'
		},
		{
			id: 398,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The giant camphor-tree:\nthe dog and I\ncompletely soaked.'
		},
		{
			id: 399,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Nice road\nleading to a nice building:\na crematorium.'
		},
		{
			id: 400,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "Rain in my eyes:\nI can't read the signpost."
		},
		{
			id: 401,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The sky at sunset -\na little alcohol would taste so good.'
		},
		{
			id: 402,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The long night:\nmade even longer\nby a barking dog.'
		},
		{
			id: 403,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "The louse I've caught\nis warmer than I am!"
		},
		{
			id: 404,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Nonchalantly pissing\noff the road\nsoaking the young weeds.'
		},
		{
			id: 405,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Winter rain clouds -\nsoldiers off to China\nto be blown to bits.'
		},
		{
			id: 406,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Marching together\non the ground their feet\nwill never pound again.'
		},
		{
			id: 407,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Leaving hands and feet\nbehind in China:\nJapanese soldiers come home.'
		},
		{
			id: 408,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Will the municipality\nstage a banner day\nfor those brought back as bones ?'
		},
		{
			id: 409,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "Baggage I can't throw off\nso heavy front and back."
		},
		{
			id: 410,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'In the calm stillness\nafter the rainstorm:\nflies.'
		},
		{
			id: 411,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Slowly but surely\nI adopt the vices\nof my dead father.'
		},
		{
			id: 412,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Sweat:\ncollecting\nin my navel.'
		},
		{
			id: 413,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "Today's lunch:\njust water."
		},
		{
			id: 414,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Breaking the dead branches\nthinking of nothing.'
		},
		{
			id: 415,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Today again\nno letters.\nOnly butterflies.'
		},
		{
			id: 416,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "At last!\nThe mail's arrived.\nSoon ripe fruit will fall."
		},
		{
			id: 417,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The leaves fall.\nFrom now on\nwater will taste better and better.'
		},
		{
			id: 418,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'A little woozy,\nleaves fall one by one.'
		},
		{
			id: 419,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'My begging-bowl\naccepts the falling leaves.'
		},
		{
			id: 420,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Hailstones also\ndrop into my begging-bowl.'
		},
		{
			id: 421,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'If I sell my rags\nand buy some alcohol -\nwill there still be loneliness ?'
		},
		{
			id: 422,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Twilight - the sound\nof a sad letter\ndropping into a postbox.'
		},
		{
			id: 423,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Goallessly\nI walk amongst tombstones.'
		},
		{
			id: 424,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Slowly, slowly\nfalling apart:\nmy final autumn.'
		},
		{
			id: 425,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "I've become a real beggar now:\none towel."
		},
		{
			id: 426,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'The few flies that remain\nfind me familiar.'
		},
		{
			id: 427,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Pissing blood -\nhow long will I be able\nto carry on ?'
		},
		{
			id: 428,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Coughing, coughing -\nand nobody to slap my back.'
		},
		{
			id: 429,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'No money, no possessions,\nno teeth -\nall alone.'
		},
		{
			id: 430,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "My heart's exhausted -\nthe mountains, the sea\nare too beautiful."
		},
		{
			id: 431,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: "Mountains I'll never see again\nfade in the distance."
		},
		{
			id: 432,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'When I die:\nweeds,\nfalling rain.'
		},
		{
			id: 433,
			editing: false,
			translatorId: 8,
			publicationId: 7,
			englishText: 'Some life remains:\nI scratch my belly...'
		},
		{
			id: 434,
			editing: false,
			translatorId: 9,
			publicationId: 8,
			japaneseText: 'Hitotsu areba\nkoto taru nabeno\nkome o togu.',
			englishText:
				"One washes rice\nin a metal pot;\nonly one pot, that's enough\nfor me).\nor\nI wash rice\nin a metal pot;\none pot's enough.\nor\nWashing rice\nin a metal pot;\none pot's enough.",
			notes:
				'Colloquialisms mark his haiku. He used easy, plain language at its best, never the literary, poetic diction of more ordinary writers.'
		},
		{
			id: 435,
			editing: false,
			translatorId: 9,
			publicationId: 8,
			japaneseText: 'Korogi yo,\nasu no kome dake wa\naru.',
			englishText: 'Oh cricket!\nthere is enough rice, at least\nfor tomorrow.'
		},
		{
			id: 436,
			editing: false,
			translatorId: 9,
			publicationId: 8,
			notes:
				'The following haiku in not grammatically correct Japanese. Santoka often was careless about grammar. He seemed to want us to read between the lines, and more often than not his grammatical mistakes, a sign of his nonchalance, add charm to his work.',
			japaneseText: 'Anta to ko-shite kisha ga\nitta ri kitari suru\nkemuri.',
			englishText: 'In your company\ngoing this way and that . . .\nthe smoke of train.'
		},
		{
			id: 437,
			editing: false,
			translatorId: 9,
			publicationId: 8,
			japaneseText: 'Ame furu\nfuru-sato wa\nhadashi de aruku.',
			englishText: 'The old home\nin the rain . . .\nI walk barefooted.'
		},
		{
			id: 438,
			editing: false,
			translatorId: 9,
			publicationId: 8,
			japaneseText: 'Teppatsu no\nnaka e mo\narare.',
			englishText: 'Into my begging bowl,\ni too,\nhailstones.',
			notes: '(July 1980)'
		},
		{
			id: 439,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'forsaken\nstill something\nin these legs'
		},
		{
			id: 440,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: "it's\ncome\nto these\ntired legs\nto stop this dragonsly"
		},
		{
			id: 441,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'slipping and falling\nmountain silence'
		},
		{
			id: 442,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'getting just enough\nto eat: rain\n*by begging that is'
		},
		{
			id: 443,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'no matter news is\ngood or bad—spring snow'
		},
		{
			id: 444,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'taking it easy,\ntaking a piss-weeds\nbud all over'
		},
		{
			id: 445,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'no sake.\ndrink in the moon'
		},
		{
			id: 446,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'certain days\nstop begging to take in\nthe mountains',
			notes:
				"Moreover, as Scott himself says of an old Frank Zappa lyric “you gotta get into it before you get out of it; you gotta get out of it before you get into it.” I can tell you, not only does he apply this to his translations, but Scott commands readers to thoroughly get in and out of Santoka's haiku—his English versions rendered as if they themselves, were . . . Japanese."
		},
		{
			id: 447,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'rock\nshadow\nwater\ngushing\nsure\nas\nI live'
		},
		{
			id: 448,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'Milky Way middle night drunkard dancing'
		},
		{
			id: 449,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'this\nrobe\nthis\nworn\nthis\nweedy\nfruition',
			notes: "(*the robe meaning a monk's garment)"
		},
		{
			id: 450,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'autumn-sitting in weeds'
		},
		{
			id: 451,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'peckers\nand\npussies\na hot\nbath\nover-flowing'
		},
		{
			id: 452,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'still alive a body for a body to scratch'
		},
		{
			id: 453,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'naked\nconversation\nabounds'
		},
		{
			id: 454,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: "jazz noise won't\nget you there\na sutra will"
		},
		{
			id: 455,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'straight ahead\nout-reaching loneliness\nroad.'
		},
		{
			id: 456,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'if we walk: the cuckoo.\nif we hurry: the cuckoo.'
		},
		{
			id: 457,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'walking:\nbuttercups\nsitting:\nbuttercups'
		},
		{
			id: 458,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'traveling\nendlessly\nclipping my nails'
		},
		{
			id: 459,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'grilling a fish\neven singeing a hand --\nsingle life'
		},
		{
			id: 460,
			editing: false,
			translatorId: 10,
			publicationId: 9,
			englishText: 'a weed. a-\nlone.\nall right.'
		},
		{
			id: 461,
			editing: false,
			translatorId: 10,
			publicationId: 10,
			englishText: 'wind blows its way to\nsea. deep in night.\nalone'
		},
		{
			id: 462,
			editing: false,
			translatorId: 10,
			publicationId: 10,
			englishText: "jazz noise won't\nget you where\na sutra will"
		},
		{
			id: 463,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'over morning noises a long bridge spans'
		},
		{
			id: 464,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'all day today too no one came fireflies'
		},
		{
			id: 465,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'until my clothes dry / this grassy breeze'
		},
		{
			id: 466,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'spider spins its web I affirm my self'
		},
		{
			id: 467,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'drizzling. / undying.'
		},
		{
			id: 468,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'no matter news is / good or bad / spring snow'
		},
		{
			id: 469,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'with the crowd around / a dead body / a sky without clouds'
		},
		{
			id: 470,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'air raid sirens / one after another / persimmons are red'
		},
		{
			id: 471,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'falling leaves / deep deep seeing / Buddha'
		},
		{
			id: 472,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'as if someone is coming loquat leaf falling'
		},
		{
			id: 473,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'wanting something to do grass blades stirring'
		},
		{
			id: 474,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'in a cool / pine wind / people / eating / horses / eating'
		},
		{
			id: 475,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'intimate / mountain / meadow / bush warbler / cries'
		},
		{
			id: 476,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'tip tap comes a bug with no buzz'
		},
		{
			id: 477,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'long away / come back: bamboo / shoots shooting'
		},
		{
			id: 478,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'waiting / cherries / ripening'
		},
		{
			id: 479,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'whatever it all is it all is blossoming'
		},
		{
			id: 480,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'walking: grasses in seed. / sitting: grasses in seed.'
		},
		{
			id: 481,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'there is only thisroad spring snow falling'
		},
		{
			id: 482,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'after a rain a thistle clear morning'
		},
		{
			id: 483,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'spring has come water sounds go where they do'
		},
		{
			id: 484,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'neither waiting / nor not waiting / moonlight weeds'
		},
		{
			id: 485,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'settled / down / persimmons / ripen / already'
		},
		{
			id: 486,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'looking down all the small stones'
		},
		{
			id: 487,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'spider makes its web I affirm my self'
		},
		{
			id: 488,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'this day this far sandals come off'
		},
		{
			id: 489,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'well now. / which way to go. / wind blowing.'
		},
		{
			id: 490,
			editing: false,
			translatorId: 10,
			publicationId: 11,
			englishText: 'nothing to wait on: / the risen moon'
		},
		{
			id: 491,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'washed / the daikon absolutely white',
			japaneseText: 'araeba daikon iyoiyo shiroshi'
		},
		{
			id: 492,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'cherry tree / cherry blossoms / cherry blossoms scatter / cherry tree',
			japaneseText: 'sakura sakura saku sakura chiru sakura'
		},
		{
			id: 493,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'as my mind calms down / the sound of water',
			japaneseText: 'kokoro ochitsukeba mizu no oto'
		},
		{
			id: 494,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "the owl is the owl / whereas I am I and can't sleep",
			japaneseText: 'fukurô wa fukurô de watashi wa watashi denemurenai'
		},
		{
			id: 495,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'passing through passing through yet still green mountains',
			japaneseText: 'wakeittemo wakeittemo aoi yama'
		},
		{
			id: 496,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'into the begging bowl, too / a hailstone',
			japaneseText: 'teppatsu no naka e mo arare'
		},
		{
			id: 497,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'my hangover clears / the blinking stars',
			japaneseText: 'yoizame no hoshi ga matataite iru'
		},
		{
			id: 498,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'I emerge from a good hot spring / to the good moon',
			japaneseText: 'yoi yu kara yoi tsuki e deta'
		},
		{
			id: 499,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "death's hush is the serene leafless tree",
			japaneseText: 'shi no shizukesa wa harete ha no nai ki'
		},
		{
			id: 500,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "which is which / everything's blooming",
			japaneseText: 'nani ga nani yara minna saite iru'
		},
		{
			id: 501,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'the last dahlia / about to wither / and beautiful as it is',
			japaneseText: 'nagori dariya karentoshite utsukushii'
		},
		{
			id: 502,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'today again all day long nobody has come / fireflies',
			japaneseText: 'kyô mo ichinichi dare mo konakatta hôtaru'
		},
		{
			id: 503,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'the grass so green / I return barefoot',
			japaneseText: 'kusa no aosa yo hadashi de modoru'
		},
		{
			id: 504,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'this is the only path / spring snow falling',
			japaneseText: 'kono michi shika nai haru no yuki furu'
		},
		{
			id: 505,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'a crow caws / I also am alone',
			japaneseText: 'karasu naite watashi mo hitori'
		},
		{
			id: 506,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'unworthy I am walking',
			japaneseText: 'dô shiyô mo nai watashi ga aruite iru'
		},
		{
			id: 507,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "The road's so straight it's lonely",
			japaneseText: 'massugu na michi de samishii'
		},
		{
			id: 508,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "fluttery but a butterfly can't sing",
			japaneseText: 'hirahira chô wa utaenai'
		},
		{
			id: 509,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "I'm composed / the persimmons are mellowing, too",
			japaneseText: 'ochitsuite kaki mo urete kuru'
		},
		{
			id: 510,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'awaiting you / the fire burns well',
			japaneseText: 'anata o matte iru hi no yô moeru'
		},
		{
			id: 511,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'so badly weakened / even when I step on fallen leaves',
			japaneseText: 'konnanimo yowatte shimatta ochiba fumu sae'
		},
		{
			id: 512,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'rustling rustling / a mute cricket has come',
			japaneseText: 'kasari kosori otosasete nakanu mushi ga kita'
		},
		{
			id: 513,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: 'a good inn / mountains on both sides / and facing a sake shop',
			japaneseText: 'yoi yado de dochira mo yama de mae wa sakaya de'
		},
		{
			id: 514,
			editing: false,
			translatorId: 11,
			publicationId: 12,
			englishText: "I'm used to being alone / the red dragonflies",
			japaneseText: 'itsumo hitori de akatonbo'
		},
		{
			id: 515,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'The path\nstraight ahead\nsolitude'
		},
		{
			id: 516,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Silently\nI put on today's\nstraw sandals"
		},
		{
			id: 517,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Today again\nsoaken wet\nwalking on a strange path'
		},
		{
			id: 518,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Today\nI pick buttercups\nI eat buttercups'
		},
		{
			id: 519,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'No inn for the night\nthe moon\nshows the way'
		},
		{
			id: 520,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Spring\nI walk holding my begging bowl\nup to where?'
		},
		{
			id: 521,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Light-hearted\nI taste\nwater'
		},
		{
			id: 522,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'My meal\ntoday\nwater'
		},
		{
			id: 523,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'In the water\nmy reflection\nas a pilgrim'
		},
		{
			id: 524,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'In my begging bowl\nthe glaring whiteness\nof rice'
		},
		{
			id: 525,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'On my own\nattacked\nby mosquitos'
		},
		{
			id: 526,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'I slap flies\nI slap mosquitos\nI slap myself'
		},
		{
			id: 527,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'With a dragonfly\non my bamboo hat\nwalking'
		},
		{
			id: 528,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'On my tired feet\na dragonfly\nhas settled'
		},
		{
			id: 529,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "From now on\nI won't wear any watch\nevening rain"
		},
		{
			id: 530,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Autumn rain\nmountains more mountains\nmountains I don't know"
		},
		{
			id: 531,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Just like this it rains\nI am soaken wet\nI walk'
		},
		{
			id: 532,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Soaken wet\nthe milestone\nshowing the way'
		},
		{
			id: 533,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "I've just been given\nsomething to eat\nfalling rain"
		},
		{
			id: 534,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'This body\nthat has survived\nI am scratching it'
		},
		{
			id: 535,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Far faraway\nbirds fly over\nsnowy mountains'
		},
		{
			id: 536,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'My skull freshly shaved\nreally reflects\nthe sunlight'
		},
		{
			id: 537,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Now that I don't meet\nanyone\nmountain butterflies"
		},
		{
			id: 538,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'In the mountain all day long\nthese ants too\nwalk'
		},
		{
			id: 539,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Some days sometimes\nI don't beg\nand gaze at the mountains"
		},
		{
			id: 540,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Getting further\nfrom these mountains\nI'll never see again"
		},
		{
			id: 541,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Not one cloud\nI take off\nmy bamboo hat'
		},
		{
			id: 542,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'This cloud there\nlet the rain down\nthat soaked me'
		},
		{
			id: 543,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Far\nfrom my home village\nbudding trees'
		},
		{
			id: 544,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Someone speaks with a voice\nlike my father's\nsad while travelling"
		},
		{
			id: 545,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'At last some mail\nfrom now on\nripe persimmons will fall'
		},
		{
			id: 546,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Postman\nHe brings me my mail\neats a persimmon\nand then leaves'
		},
		{
			id: 547,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Everything may be happy\nor sad\ngrass grows'
		},
		{
			id: 548,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Falling leaves\nthey also fall\nin my begging bowl'
		},
		{
			id: 549,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Under the quilt\nI sleep\ndreaming of my home village'
		},
		{
			id: 550,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Now that no one comes anymore\nchillis\nhave gone red'
		},
		{
			id: 551,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Picking up a flower\nI don't know\nI offer it to Buddha"
		},
		{
			id: 552,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Up to\nthe rows of graves\nthe waves break'
		},
		{
			id: 553,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Today\nI am still alive\nI stretch my legs'
		},
		{
			id: 554,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'In public baths\nNaked\nthe discussion gets\nheated'
		},
		{
			id: 555,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "Something's missing\na tooth fell out\nI hurl it into the night"
		},
		{
			id: 556,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: "At the foot of the mountain\nin the sun's heat\nin line five or six graves"
		},
		{
			id: 557,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Heavy rain\nthe postman\ncomes from so far'
		},
		{
			id: 558,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'This\nmy face\nin the cold mirror?'
		},
		{
			id: 559,
			editing: false,
			translatorId: 12,
			publicationId: 13,
			englishText: 'Making fun of me\nmy figure seen from behind\ngoing away\nin the autumn rain?'
		},
		{
			id: 560,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			japaneseText: 'sukkari hagete hotei wa waraitsuzuketeiru',
			englishText: 'the Hotei statue: / rubbed rather bald, but laughing still.'
		},
		{
			id: 561,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			japaneseText: 'yoi o-minori no sayasaya o-tsuki-sama',
			englishText: 'A great harvest, / sighs, the moon content.'
		},
		{
			id: 562,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			japaneseText: 'nonbiri shito suru kusa no me darake',
			englishText: 'Roadside, taking a piss, / soaking the scrub-grass.'
		},
		{
			id: 563,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			japaneseText: 'fuyu ame no ishidan o noboru santa maria',
			englishText: "Winter's rain, I scale the / slick stone steps . . . / Santa Maria."
		},
		{
			id: 564,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			japaneseText: 'tsuki no akarusa wa doko o bakugeki shite iru koto ka',
			englishText: 'The moon so luminous -- / and showing where / the bombs will fall?'
		},
		{
			id: 565,
			editing: false,
			translatorId: 13,
			publicationId: 14,
			englishText: 'From behind, going: shape soaked in winter-rain.',
			japaneseText: 'ushiro-sugata no shigurete yuku ka'
		},
		{
			id: 566,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain in late autumn / managing not yet / to die',
			japaneseText: 'shigururu ya / shinanaide iru'
		},
		{
			id: 567,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain in late autumn / walking in the hills / with the autumn rain',
			japaneseText: 'shigururu ya shigururu yama e ayumi iru'
		},
		{
			id: 568,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Whose back going / into the autumn rain / fading',
			japaneseText: 'ushiro sugata no shigurete yuku ka'
		},
		{
			id: 569,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain in late autumn / all the rice I have / nicely cooked',
			japaneseText: 'shigururu ya aru dake no gohan yô yaketa'
		},
		{
			id: 570,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			japaneseText: 'asayu konkon afururu mannaka no watakushi',
			englishText: 'Dôgo Spa\nThe morning bath / water swiftly overflows / me in it'
		},
		{
			id: 571,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'On the dead / straight road / alone',
			japaneseText: 'massugu na michi de samishii'
		},
		{
			id: 572,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Going barefoot / about my home village / as the rain falls',
			japaneseText: 'ame furu furusato wa hadashi de aruku'
		},
		{
			id: 573,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'The sound of autumn rain?',
			japaneseText: 'oto wa shigure ka'
		},
		{
			id: 574,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Light rain since morning / the beauty of / the persimmon leaves',
			japaneseText: 'asa kara shigurete kaki no ha no utsukushisa wa'
		},
		{
			id: 575,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Wet in the rain / and the awaited / person comes',
			japaneseText: 'shigurete nurete matsu hito ga kita'
		},
		{
			id: 576,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Today spent alone / and at its close / the rain comes on',
			japaneseText: 'watashi hitori no kyô no owari no shigurete kita'
		},
		{
			id: 577,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Walking through the rain of / the village where I have / no place to stay',
			japaneseText: 'tomete kurenai mura no shigure o aruku'
		},
		{
			id: 578,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'The rain comes down / the road / makes one straight line',
			japaneseText: 'shigururu ya michi wa hitosuji'
		},
		{
			id: 579,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Before the shrine the / mandarin tree its fruit / wet in the autumn rain',
			japaneseText: 'ukon no tachibana no mi no shigururu ya'
		},
		{
			id: 580,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'The great camphor tree / and me and the dog / soaked in the rain',
			japaneseText: 'ôkusu mo watashi mo inu mo shiguretsutsu'
		},
		{
			id: 581,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Temple among pines as / rain comes on here I shall / spend the night',
			japaneseText: 'matsu no otera shigure to natte tomarimasu'
		},
		{
			id: 582,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Floating drifting / the wandering water / I taste',
			japaneseText: 'hyôhyô to shite mizu o ajiwau'
		},
		{
			id: 583,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'With the sound of falling / water to the / village I came down',
			japaneseText: 'mizu oto to issho ni sato e kudarite kita'
		},
		{
			id: 584,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Soaked in the / rain that cloud there / has let fall',
			japaneseText: 'ano kumo ga otoshita ame ni nurete iru'
		},
		{
			id: 585,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Across the water the / lights in the house of women / lit once more',
			japaneseText: 'mizu wo hedatete / onagoya no hi ga / matataki dashita'
		},
		{
			id: 586,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			japaneseText: 'chimpoko mo ososo mo waite afureru yu',
			englishText: 'The Public Bath\nCocks cunts all / boiling and the bath / water flows over'
		},
		{
			id: 587,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Having got this far / I drink some water / then leave',
			japaneseText: 'koko made o kishi mizu nonde saru'
		},
		{
			id: 588,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'I shall cross this / water the crow / flies over',
			japaneseText: 'karasu tonde yuku mizu o watarô'
		},
		{
			id: 589,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'In the early morning / a cold rain falls / I light the fire',
			japaneseText: 'asa hayaku shigururu hi o taite iru'
		},
		{
			id: 590,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain falling and / the postman has / travelled far for me',
			japaneseText: 'shigururu ya Y?binya-san tôku kite kureta'
		},
		{
			id: 591,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'A moonlit night / falling rain the sound / of spring approaching',
			japaneseText: 'tsukiyo shigurete haru chikaku naru oto'
		},
		{
			id: 592,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain falling on my bamboo / hat I go next door / to get some water',
			japaneseText: 'shigure kasa de otonari e mizu o morai ni'
		},
		{
			id: 593,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain falling on the / persimmon its autumn leaves / finally beautiful',
			japaneseText: 'shigurete kaki no ha no iyo-iyo utsukushiku'
		},
		{
			id: 594,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Caught by the rain / the woman with her load / hurries onwards',
			japaneseText: 'otata shigurete suta suta isogu'
		},
		{
			id: 595,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'It rains and I / follow after / the footprints',
			japaneseText: 'shigururu ashiato o tadoriyuku'
		},
		{
			id: 596,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'The sound of waves / in the rain / in the sunlight',
			japaneseText: 'nami oto shigurete harete'
		},
		{
			id: 597,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain falling on / the pine tree and / the pine tree',
			japaneseText: 'matsu no ki matsu no ki to shigurete iru'
		},
		{
			id: 598,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'In the falling rain / my way barred by / a dog',
			japaneseText: 'shigururu ya inu to mukiatte iru'
		},
		{
			id: 599,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Bright light of the moon / does it know where they / are bombing tonight',
			japaneseText: 'tsuki no akarusa wa doko o bakugeki shite iru koto ka'
		},
		{
			id: 600,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText:
				'Beaten by the wind even / a house like this has given / both sons as the signs show',
			japaneseText: 'kogarashi no hi no maru futatsu futari mo dashite iru'
		},
		{
			id: 601,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'We must win all / burgeoning together / through the great earth',
			japaneseText: 'kataneba naranai daichi issei ni mebukô to suru'
		},
		{
			id: 602,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Marching firmly on the / earth their feet will / never tread again',
			japaneseText: 'futatabi wa fumamai tsuchi o fumishimete iku'
		},
		{
			id: 603,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'All I can do is / walk the autumn rain / falls furiously',
			japaneseText: 'aruku hoka nai aki no ame furitsunoru'
		},
		{
			id: 604,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Soaked through in the autumn / rain I wring out my / travel garment and go on',
			japaneseText: 'shigurete nurete tabigoromo shibotte wa yuku'
		},
		{
			id: 605,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Unable yet to die / flowers of the other shore / in bloom',
			japaneseText: 'nakanaka shinenai higanbana saku'
		},
		{
			id: 606,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Hurrying on to / death the water / tastes so good',
			japaneseText: 'shi o hishi hishi to mizu no umasa kana'
		},
		{
			id: 607,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Rain falls on one then / another mountain / unknown mountains',
			japaneseText: 'shigurete yama o mata yama o shiranai yama'
		},
		{
			id: 608,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'Striding out urging / my body onwards cold / rain falls on the mountain',
			japaneseText: 'karada nagedashite shigururu yama'
		},
		{
			id: 609,
			editing: false,
			translatorId: 14,
			publicationId: 15,
			englishText: 'In the cold rain / the signpost and I / cannot read it',
			japaneseText: 'shigurete michi shirube sono ji ga yomenai'
		},
		{
			id: 610,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'enten hateshinaki kaze fuku',
			englishText: 'Endless scorching sun- / the wind blows',
			notes:
				"Comment by Addiss:\nHere the calligraphy seems more restrained and graceful than the previous tanzaku, but the freedom of the brushwork is at least as strong as before, if more subtle. The single column of words is maintained within the center of the format as though the red paper were itself the blazing sunlight, withering the calligraphy as though it were Santoka's body in the heat.\nFor example, the kana syllable shi is created with a single thin verticle line in the center of the tanzaku, but when the character kaze is written three graphs later, it opens the space as it might cool the pores of a sweaty body.\nFor some viewers, it may seem odd to see a Santoka poem, with its simplicity of diction and plainness of speech, on a surface so highly decorated with fluid patterns of cut squares of gold leaf. However, the contrast may add to the effect of the calligraphy, just as it gives extra impact to the words of the haiku."
		},
		{
			id: 611,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			englishText: 'Snow / falls on snow- / and remains silent',
			japaneseText: 'yuki e yuki furu shizukesa ni oru'
		},
		{
			id: 612,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'ishi ni tombo wa mahiru no yume miru',
			englishText: 'Dragonfly on a rock- / absorbed in / a daydream'
		},
		{
			id: 613,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'hitori hissori takenoko take ni naru',
			englishText: 'Alone, silently- / the bamboo shoot'
		},
		{
			id: 614,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			englishText: 'To the mountain quietude / the quiet / rain',
			japaneseText: 'yama no shizukasa e shizuka naru ame'
		},
		{
			id: 615,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			englishText: 'The sound / of the raindrops / also grown older',
			japaneseText: 'amadare no oto mo toshi totta'
		},
		{
			id: 616,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'shigururu ya shinanaide iru',
			englishText: 'Winter rain- / I am not dead yet'
		},
		{
			id: 617,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'kokoro tsukarete yama ga umi ga utsukushisugiru',
			englishText: 'Tired heart- / mountains and ocean / too much beauty'
		},
		{
			id: 618,
			editing: false,
			translatorId: 15,
			publicationId: 16,
			japaneseText: 'shinde shimaeba zassô ame furu',
			englishText: 'When I finally die- / weeds / falling rain'
		},
		{
			id: 619,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'ふるさとの土の底から鉦たたき',
			englishText: 'From deep beneath\nmy hometown soil\na gong is struck'
		},
		{
			id: 620,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'へそが汗ためてゐる',
			englishText: 'Sweat collects\nin my belly button'
		},
		{
			id: 621,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '咳がやまない背中をたたく手がない',
			englishText: 'Can’t stop coughing\nNo hand to tap me on the back'
		},
		{
			id: 622,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '夕立が洗つていつた茄子をもぐ',
			englishText: 'Chewing on eggplant\nwashed clean by rain'
		},
		{
			id: 623,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '春の雪ふる女はまことうつくしい',
			englishText: 'Spring snowfall\nShe is truly\na beautiful woman'
		},
		{
			id: 624,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'けふもいちにち誰も来なかつたほうたる',
			englishText: 'No one came by today, either,\nlittle firefly'
		},
		{
			id: 625,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '月かげのまんなかをもどる',
			englishText: 'returning\nto the center\nof the moonlight'
		},
		{
			id: 626,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'よい道がよい建物へ、焼場です',
			englishText: 'A pleasant road\nleads to a pleasant building,\na crematorium'
		},
		{
			id: 627,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'しぐるるや死なないでゐる',
			englishText: 'drizzling rain –\nI’m not dead yet'
		},
		{
			id: 628,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '木の葉散る歩きつめる',
			englishText: 'Tree leaves fall\nWalking just to walk'
		},
		{
			id: 629,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'まつすぐな道でさみしい',
			englishText: 'The road ahead\nis lonesome'
		},
		{
			id: 630,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'あるけばかつこういそげばかつこう',
			englishText: 'walking,\ndownhill\nrunning,\ndownhill'
		},
		{
			id: 631,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'この道しかない春の雪ふる',
			englishText: 'This is the only road\nSnowfall in spring'
		},
		{
			id: 632,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '笠にとんぼをとまらせてあるく',
			englishText: 'A dragonfly\non my straw hat,\nI walk on'
		},
		{
			id: 633,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'ほうたるこいこいふるさとにきた',
			englishText: 'Firefly, come, come\nWe’ve made it to my hometown'
		},
		{
			id: 634,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '雨ふるふるふるさとははだしであるく',
			englishText: 'rain falls and falls\nwalking barefoot\nthrough my hometown'
		},
		{
			id: 635,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'ビルとビルとのすきまから見えて山の青さよ',
			englishText: 'In the cracks between the buildings\nI can see the blue of the mountains'
		},
		{
			id: 636,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'ほととぎすあすはあの山こえて行かう',
			englishText: 'Cuckoo,\ntomorrow let’s climb\nover that mountain'
		},
		{
			id: 637,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'ふくろふはふくろふでわたしはわたしでねむれない',
			englishText: 'The owl, being an owl,\nand I, being me,\ncan’t sleep'
		},
		{
			id: 638,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'どうしようもないわたしが歩いてゐる',
			englishText: 'Nothing else I can do\nI’ll just keep on walking'
		},
		{
			id: 639,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '月が昇れりわがまへの花ひらくべし',
			englishText: 'The moon rises\nA flower blooming\nBefore my eyes'
		},
		{
			id: 640,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'もりもりもりあがる雲へ歩む',
			englishText: 'rising high high higher\nwalking toward the clouds'
		},
		{
			id: 641,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: 'つかれた脚へとんぼとまった',
			englishText: 'A dragonfly landed\nat my weary feet'
		},
		{
			id: 642,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '雨だれの音も年とった',
			englishText: 'Even the sound\nof the rain\nhas grown old'
		},
		{
			id: 643,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '何を求める風の中ゆく',
			englishText: 'Whatever you wish for\nblows away in the wind'
		},
		{
			id: 644,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '窓あけて窓いっぱいの春',
			englishText: 'Open the window\nand the window\nis filled with Spring'
		},
		{
			id: 645,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '生死の中の雪ふりしきる',
			englishText: 'Snow falls endlessly\nbetween life and death'
		},
		{
			id: 646,
			editing: false,
			translatorId: 17,
			publicationId: 17,
			japaneseText: '歩きつづける彼岸花咲きつづける',
			englishText: 'I keep on walking\nand the red spider lily\nkeeps on blooming'
		},
		{
			id: 647,
			editing: false,
			translatorId: 18,
			publicationId: 18,
			englishText: 'No path but this one--\nI walk alone.'
		},
		{
			id: 648,
			editing: false,
			translatorId: 1,
			publicationId: 18,
			englishText: 'Walking into the wind,\nheaping abuse upon myself.'
		},
		{
			id: 649,
			editing: false,
			translatorId: 18,
			publicationId: 18,
			englishText: 'Stretching out my feet;\nSome daylight still remains.'
		},
		{
			id: 650,
			editing: false,
			translatorId: 1,
			publicationId: 18,
			englishText: 'A steady autumn drizzle,\none road, straight ahead.'
		},
		{
			id: 651,
			editing: false,
			translatorId: 1,
			publicationId: 18,
			englishText: 'At the tobacco shop\nno cigarettes,\na cold rain falls.'
		},
		{
			id: 652,
			editing: false,
			translatorId: 18,
			publicationId: 18,
			englishText: 'The deep, cool moon\nAppears between the buildings.'
		},
		{
			id: 653,
			editing: false,
			translatorId: 18,
			publicationId: 18,
			englishText: 'Going deeper,\nAnd still deeper--\nThe green mountains.'
		},
		{
			id: 654,
			editing: false,
			translatorId: 1,
			publicationId: 18,
			englishText: 'I push my way through,\npush my way through,\ngreen mountains'
		},
		{
			id: 655,
			editing: false,
			translatorId: 18,
			publicationId: 18,
			englishText: 'Thinking of nothing,\nI walk among\nA forest of withered trees.'
		},
		{
			id: 656,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'soppy with morning dew/ I go off/ in any direction I please'
		},
		{
			id: 657,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'drizzly rain/ only one road/ to go by'
		},
		{
			id: 658,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'husband and wife quarreling/ night/ spiders dangle down'
		},
		{
			id: 659,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'as muddy water flows/ it becomes clear'
		},
		{
			id: 660,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'hurry down the road/ never look back'
		},
		{
			id: 661,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'no help/ for the likes of me/ I go on walking'
		},
		{
			id: 662,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'get drunk/ you hear all sorts of voices/ winter rain'
		},
		{
			id: 663,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: "Heaven/ doesn't kill me/ it makes me write poems"
		},
		{
			id: 664,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'even in/ my iron begging bowl/ hailstones'
		},
		{
			id: 665,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'autumn wind/ for all my walking/ for all my walking'
		},
		{
			id: 666,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'stretching out my feet/ they touch the man from Shikoku'
		},
		{
			id: 667,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'tree fallen over/ sitting on it'
		},
		{
			id: 668,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'on the road/ a tooth/ about to come loose'
		},
		{
			id: 669,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'cold clouds/ hurrying'
		},
		{
			id: 670,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'not a cloud in sight/ off comes my hat'
		},
		{
			id: 671,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'camellia/ I turned to look back at/ red'
		},
		{
			id: 672,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'nearly run over/ by a car/ cold cold road'
		},
		{
			id: 673,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'the deeper I go/ the deeper I go/ green mountains'
		},
		{
			id: 674,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'even in\nmy iron begging bowl\nhailstones'
		},
		{
			id: 675,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'a drink would be nice now\nsunset sky'
		},
		{
			id: 676,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'all day\nin the mountains\nants too are walking'
		},
		{
			id: 677,
			editing: false,
			translatorId: 19,
			publicationId: 18,
			englishText: 'autumn wind\nfor all my walking---\nfor all my walking---'
		},
		{
			id: 678,
			editing: false,
			translatorId: 20,
			publicationId: 19,
			japaneseText: 'hana ga ha ni naru tôkyô yo sayônara',
			englishText: 'the blossoms / have become leaves so / tokyo, i leave'
		},
		{
			id: 679,
			editing: false,
			translatorId: 20,
			publicationId: 19,
			japaneseText: 'hana ga ha ni naru tôkyô yo sayônara',
			englishText: 'hey, tokyo / your blossoms are leaves: / good-bye!'
		},
		{
			id: 680,
			editing: false,
			translatorId: 20,
			publicationId: 19,
			japaneseText: 'itsu to naku sakura ga saite atte wa wakareru',
			englishText: 'well, the cherries / they blossomed in a wink / we meet, we part'
		},
		{
			id: 681,
			editing: false,
			translatorId: 20,
			publicationId: 19,
			japaneseText: 'itsu to naku sakura ga saite atte wa wakareru',
			englishText: "i almost missed / the cherry's bloom: soon as / we meet we part"
		},
		{
			id: 682,
			editing: false,
			translatorId: 20,
			publicationId: 20,
			japaneseText: 'damatte kyô no waraji haku',
			englishText: 'wordless / i put on my waraji / for today'
		},
		{
			id: 683,
			editing: false,
			translatorId: 20,
			publicationId: 20,
			japaneseText: 'damatte kyô no waraji haku',
			englishText: "lips clenched / i put on today's footwear"
		},
		{
			id: 684,
			editing: false,
			translatorId: 20,
			publicationId: 20,
			englishText: "New Year's Eve / is dumb and New Year's / even dumber",
			japaneseText: 'ômisoka oroka nari ganjitsu nao oraoka nari'
		},
		{
			id: 685,
			editing: false,
			translatorId: 20,
			publicationId: 20,
			japaneseText: 'asu wa ganjitsu no tsume demo kirô',
			englishText: "this morning / i guess i'll clip the nails / of the new year"
		},
		{
			id: 686,
			editing: false,
			translatorId: 20,
			publicationId: 20,
			japaneseText: 'asu wa ganjitsu no tsume demo kirô',
			englishText: "i guess i'll clip / my new year nails / this morning"
		}
	],
	publications: [
		{
			id: 0,
			description:
				'"Santoka" by R. H. Blyth, in A History of Haiku. Tokyo: The Hokuseido Press, 1964. Volume 2: From Issa to the Present. pp. 173-88.'
		},
		{
			id: 1,
			description:
				'Abrams, James. Hail in the Begging Bowl: The Odyssey and Poetry of Santoka.\nMonumenta Nipponica, Volume 32, No. 3. (Autumn, 1977), pp. 269-302.'
		},
		{
			id: 2,
			description:
				'Thistle brilliant morning : Shiki, Hekigodô, Santôka, Hôsai, [translations from the Japanese William J. Higginson]. Byways Press, England, 1973; From Here Press, Paterson, N.J. 1975. 20 p.'
		},
		{
			id: 3,
			description:
				'Santoka: Grass and Tree Cairn by Taneda Santôka. Translations by Hiroaki Sato; illustrations by Stephen Addiss, Winchester, Va.: Red Moon Press, 2002, xxii + 74 pages,'
		},
		{
			id: 4,
			description: 'Walking Into the Wind: A Sweep of Poems by Santoka, versions of Cid Corman'
		},
		{
			id: 5,
			description:
				'GRASS TREE STUPA (SOMOKUTOH)\nSelected and translated by Takashi Nonin, Matsuyama University, Matsuyama City, Ehime Prefecture, Japan'
		},
		{
			id: 6,
			description: `Jesse Glass
        My Santoka Translations
        http://www.sendecki.com/ahadada/archives/2005/03/06/my_santoka_translations.php
        These are a few of my translations of the experimental, free-form haiku of Santoka (1882–1940). Santoka practiced “Walking Zen” and traveled Kyushu, Honshu, and Shikoku on foot as an itinerant monk begging enough money for a cup of sake and a bowl of rice a day. Santoka’s father was a womanizer and a spend-thrift and his mother killed herself on account of this. His memory of her body being pulled from the well in which she drowned herself haunted him all of his life.`
		},
		{
			id: 7,
			description:
				'WEEDS, FALLING RAIN: a selection of Zen Haikai by Santoka Taneda\nnew versions by Okami'
		},
		{
			id: 8,
			description: `Santôka by Kametaro
        http://web.archive.org/web/20091027124627/http://www.geocities.com/meister_z/SANTOKA.htm
        http://www.cc.matsuyama-u.ac.jp/~kametaro/santoka1.html`
		},
		{
			id: 9,
			description:
				'The Santoka versions by Scott Watson\nPublished in Japan by Bookgirl Press / 3-13-16 Tsurugaya-higashi Miyagino-ku, Sendai / 983-0826. Manufactured in Sendai, Japan by Sasaki Printing &amp; Publishing Co., Ltd. / 8-45 Nishimachi Rokuchonome / Wakabayashi-ku, Sendai / 984-0011. ISBN: 4-915948-41-2 C0098. Cover and other illustrations by Ed Baker, Cover design by P.B RAPHICS. 2005, 42 pages,'
		},
		{
			id: 10,
			description:
				'Bookreview by Jane Reichhold\nLYNX, A Journal for Linking Poets, XXI:1 February, 2006\nIn 2000 and 2004, Scott Watson had two articles on his translations of Santoka published in the Tohoku Gakuin Review under the titles "Weeds We\'d Wed" and "A Life to Live." What the readers will find in this book, are these two journal pieces, without revision or changes, along with the introductions. The cover of the book has an ink wash calligraphy and illustration by Ed Baker.\nThe first article "Weeds We\'d Wed," begins with the story of how Scott Watson discovered the work of Taneda Santoka, both in English and then through Japanese friends in a poetry seminar. The translation by Cid Corman which as Watson notes, "is more Corman than Santoka" left him searching for versions that better compared to his own. Those of John Stevens\'s work came under his scrutiny, as well as the work published online by several sites and translators (not named, but should have mentioned Hiroaki Sato). Watson\'s own versions of the translations then appeared in the now discontinued US haiku magazine Persimmons.\nThe article continues with a brief biography of Santoka\'s life taken from the Kodansha Encyclopedia of Japan. What the encyclopedia avoids saying is that Santoka was an alcoholic who then drifted from job down to lower job, was divorced, and ended up traveling around as a mendicant Zen priest, begging from friends and writing travel diaries.\nWatson then uses a page to describe and analyze Santoka\'s poetry and ends with his relationship to Zen poetry. Watson uses a Zen approach to translating the poems into a non form - giving them the number of words or lines as the spirit moves him. Thus, he ends up with such haiku:'
		},
		{
			id: 11,
			description:
				'Walking By My Self Again by Taneda Santoka, Versions by Scott Watson, Sendai, Japan: Bookgirl Press, 2011, 68 pages'
		},
		{
			id: 12,
			description:
				'Santôka: A Translation with Photographic Images. Photographs by Hakudô Inoue; book and cover design by Kazuya Takaoka; English text by Emiko Miyashita and Paul Watsky. (PIE Books, Tokyo, 2006). 400 pages'
		},
		{
			id: 13,
			description:
				"Santôka's haiku translated by Gilles Fabre > http://haikuspirit.org/santokaEN.html"
		},
		{
			id: 14,
			description:
				'Taneda Santôka: A Selection of His Haiku, with Commentary by Sean Somers, Simply Haiku: A Quarterly Journal of Japanese Short Form Poetry, Summer 2007, vol 5 no 2'
		},
		{
			id: 15,
			description:
				"Rain in the Wind: Four Stories. By Saiichi Maruya. Translated by Dennis Keene. Tokyo; New York: Kodansha International, 1990, pp. 109-234. (Japan's modern writers)"
		},
		{
			id: 16,
			description:
				'Stephen Addiss\nHaiku: An Anthology of Japanese Poems (with Fumiko and Akira Yamamoto). Boston and London: Shambhala Publications, 2009, 208 pages'
		},
		{
			id: 17,
			description: `Alex Fyffe\nhttp://longdream.wordpress.com/category/poetry/taneda-santoka/\nTaneda Santōka (1882-1940) was an early free-form haiku poet, a contemporary of Ogiwara Seisensui and Ozaki Hōsai. His given name was Taneda Shōichi (種田正一), but like most (if not all) Japanese haiku poets (俳人, haijin) he gave himself a haiku pseudonym (俳号, haigou). Santōka (山頭火) means “fire on the mountain.” I hope that you have enjoyed taking this little walk with me and Santōka. But now I think it’s time to let him walk the mountains alone, once again, with the insects. All poems taken from the Gendai Haiku Association Database (現代俳句協会, Modern Haiku Association)`
		},
		{
			id: 18,
			description:
				'J. Thomas Rimer. "The Poetry of Santoka (1882-1940)"\nin: A Reader\'s Guide to Japanese Literature, Kodansha International, 1988, pp. 121-23.'
		},
		{
			id: 19,
			description:
				'Robin D. Gill\nCherry Blossom Epiphany: The poetry and philosophy of a flowering tree, Paraverse Press, Coconut Grove, Florida 2007, pp. 303-304.'
		},
		{
			id: 20,
			description:
				'Robin D. Gill\nThe 5th Season, Paraverse Press, Coconut Grove, Florida 2007, pp. 128, 156, 435.'
		}
	],
	translators: [
		{ id: 0, name: 'R. H. Blyth' },
		{ id: 1, name: 'James Abrams' },
		{ id: 2, name: 'William J. Higginson' },
		{ id: 3, name: 'Hiroaki Sato' },
		{ id: 5, name: 'Cid Corman' },
		{ id: 6, name: 'Takashi Nonin' },
		{ id: 7, name: 'Jesse Glass' },
		{ id: 8, name: 'Okami' },
		{ id: 9, name: 'Kametaro' },
		{ id: 10, name: 'Scott Watson' },
		{ id: 11, name: 'Emiko Miyashita and Paul Watsky' },
		{ id: 12, name: 'Gilles Fabre' },
		{ id: 13, name: 'Sean Somers' },
		{ id: 14, name: 'Dennis Keene' },
		{ id: 15, name: 'Stephen Addiss with Fumiko and Akira Yamamoto' },
		{ id: 17, name: 'Alex Fyffe' },
		{ id: 18, name: 'John Stevens' },
		{ id: 19, name: 'Michael Hoffman' },
		{ id: 20, name: 'Robin D. Gill' }
	]
}

export default database
