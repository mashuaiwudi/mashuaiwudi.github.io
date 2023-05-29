var text_content = ['Why Every Young Physician Should Have a Professional Twitter Account As patients and medical providers increasingly use online sources for information and support, Twitter offers a unique opportunity for young medical professionals like yourself to voice opinions and be heard in ways that otherwise would be challenging at such an early level of medical training.',
        'Profit Sharing: Labor\'s New Opportunity The stand-out national problem we have today is that in recent decades, profit sharing examples in industry have declined and fallen out of media attention. Profit sharing was commonplace in the first half of the 20th century, but several decades of strong post-World War II growth persuaded many American managers that regular wage and benefit increases could effectively share the wealth with the workforces.',
        'Focus Matters: Focus On Your Dreams, Not Your Distractions. How would you measure up if someone observed you and wrote down what you were doing once a minute?  Would they see you scrolling through social media, talking on the phone to your relative about a problem at home, or taking action toward your dreams?',
        'Something Old, Something New in Donald Trump\'s Populism Donald Trump\'s surprisingly successful presidential campaign accompanied by violence at campaign rallies and a general disregard for democratic norms are only the latest manifestation of this declining confidence. Trump would be impossible at a time or a place where democratic commitments were more robust and where the temptations of yielding to a strong leader who operates outside of the normal rules of the game were less pronounced.',
        'Mom And Dad, Please Explain This One to Your Daughters Some months back, Senate Republicans blocked - - for the third time - - the Paycheck Fairness Act, a bill proposing to close the pay gap between men and women. The goal of the bill - - the attainment of equal pay for equal work - - seems like a no-brainer, right? Yet not a single Republican voted in favor of the Act.',
        '3 Simple Meditations to Help You Thrive The key to meditation is not quantity but consistency. Rather than picking a specific time to meditate daily, add meditation to your regular routine. And at the end of each meditation, take a moment to say thank you to yourself for taking time to get still today.',
        'What Does "Out of the Box Thinking" Really Mean? Once we climb outside the box, all sorts of possible solutions emerge. We could be tons more innovative than we are, if we\'d just acknowledge the fact that traditional American business isn\'t based on the idea of solving complex problems in clever ways.',
        '2015: The Trend Line for Communications Services - - Phone, Broadband, Internet, Cable TV & Wireless - - Sucks As a telecom analyst for over 30 + years, I\'ve been tracking the trend lines of communications services. And from the customer perspective - - your perspective - - 2015 will be like watching a train wreck in slow motion - - and continue over the next few years.',
        'Hangout Snapshot: Get a Closer Look at Zella Day This spot the next several days will feature upcoming artists who were performing at the 2015 Hangout festival in Gulf Shores, Alabama, from May 15-17.  It kicks off with Zella Day, a 20-year-old singer-songwriter from Pinetop, Arizona, who now resides in Los Angeles.',
        'The Answer Isn\'t Socialism. It\'s Capitalism That Better Spreads the Benefits of the Productivity Revolution We don\'t need socialism. We need a capitalism that works for the vast majority. The productivity revolution should be making our lives better - - not poorer and more insecure. And it will do that when we have the political will to spread its benefits.',
        'Some Thoughts On Deaths At Electric Zoo, Dance Music And Drugs The deaths of two Electric Zoo attendees and hospitalization of at least four others prompted the cancellation of the third day of the festival on Sunday. As a music journalist who covers dance music for one of the nation\'s biggest media outlets, I can\'t say it\'s a story I\'m shocked to hear.',
        'The American Stories That Cannot Be Untold When I hear of black and Latino men being stopped, being searched, being harassed, being beaten, being shot, being killed, I never think, well, this has nothing to do with race. The very idea that somehow, of all areas of life, this is the one where race does not enter, makes me shake with anger. It\'s always about race.',
        'What\'s Damaging About Fat-Shaming: The Last Acceptable Form of Bias Seemingly, progress is being made toward a world where, legally and socially, it\'s understood that all people have a right to be respected. Except, perhaps, those who are overweight. Sadly there are still many people who make fun of, shame or otherwise mistreat others who weigh more than they do.',
        'Cinefantastique Spotlight Podcast: Beautiful Creatures The writer and director here is Richard LaGravenese, raising the question: Can the man who was an Oscar nominee for The Fisher King and has garnered praise for his screenplays for A Little Princess and Beloved, among others, bring a similar intelligence to a teen-oriented romance?',
        'People On Third Base Claiming They Hit a Triple, or Marginal Product Theory at Work... Not! If the last worker hired is being paid an hourly wage less than the value of the firm\'s output per hour, if would make sense to hire additional workers. The theory isn\'t completely batty, but it is way too easy to find egregious exceptions.',
        'In the New York Film Fest the Outsize Egos of Artists Rule There\'s sometimes a common theme or recurring character that threads through a film festival.  This can be especially striking in a fest as tightly curated as the New York Film Festival.  Such convergences usually happen by accident, according to Kent Jones.',
        'Sneak Peek: HuffPost Brings Real Time Collaboration to the Newsroom If you\'re a regular reader of the Huffington Post you might not have given much thought to the technology behind the news articles that you read, share and comment upon on our site. Since 2005 the tech team at HuffPost has been working hand-in -glove with our editors to create the ultimate digital content delivery system.',
        'What Silicon Valley Executives Keep Getting Wrong About Education Successful Silicon Valley entrepreneurs who clearly understand the importance of understanding the market and testing how effective their products are seem to leave those important instincts at the door when they comment on K-12 education.',
        'Google + Now Open for Teens With Some Safeguards For the most part, teens\' experience on Google + will be just like adults, but there are some special safeguards for users under 18. Google didn\'t put any major breaks on teens - - it\'s giving them freedom, but it did make some default settings for teens more restrictive.',
        'Internet Governance Forum in Azerbaijan to Discuss Global Policy The IGF is a United Nations forum to discuss a wide variety of issues regarding Internet governance. Unlike many U.N. forums, IGF is attended not just by government officials but also by corporations, non-profit groups and scholars interested in how to handle content management on the global Internet.'];

var ground_truth_AIRoles = [2, 0, 2, 3, 3, 2, 0, 0, 1, 0, 1, 3, 2, 1, 3, 1, 4, 4, 4, 4];
var first_prediction = [2, 0, 2, 3, 3, 2, 0, 4, 1, 3, 1, 3, 3, 1, 0, 1, 4, 0, 4, 3];

var ai_prediction = [[2, 0, 4, 3, 1],
			[0, 3, 2, 4, 1],
			[2, 3, 4, 0, 1],
			[3, 1, 0, 2, 4],
			[3, 0, 1, 2, 4],
			[2, 0, 3, 1, 4],
			[0, 1, 2, 3, 4],
			[4, 0, 1, 3, 2],
			[1, 3, 2, 0, 4],
			[3, 2, 0, 4, 1],
			[1, 2, 3, 0, 4],
			[3, 1, 2, 0, 4],
			[3, 2, 0, 1, 4],
			[1, 3, 2, 0, 4],
			[0, 3, 2, 1, 4],
			[1, 0, 2, 3, 4],
			[4, 0, 3, 2, 1],
			[0, 4, 2, 3, 1],
			[4, 2, 3, 0, 1],
			[3, 0, 4, 1, 2]];

var features_business = [['offers', 'professional', 'medical', 'opportunity', 'voice', 'patients', 'support', 'unique', 'account', 'level'], ['growth', 'managers', 'war', 'profit', 'industry', 'decades', 'sharing', 'national', 'world', 'opportunity'], ['dreams', 'action', 'social', 'observed', 'someone', 'talking', 'measure', 'matters', 'focus', 'media'], ['trump', 'democratic', 'campaign', 'successful', 'violence', 'accompanied', 'presidential', 'leader', 'donald', 'general'], ['bill', 'senate', 'republicans', 'republican', 'gap', 'work', 'pay', 'act', 'women', 'fairness'], ['meditation', 'meditate', 'consistency', 'routine', 'help', 'specific', 'simple', 'still', 'take', 'end'], ['business', 'box', 'innovative', 'traditional', 'based', 'climb', 'solving', 'problems', 'thinking', 'ways'], ['customer', 'internet', 'communications', 'services', 'trend', 'phone', 'line', 'lines', 'tv', 'wireless'], ['singer', 'festival', 'artists', 'feature', 'arizona', '15', 'upcoming', 'several', 'los', 'day'], ['productivity', 'capitalism', 'political', 'benefits', 'lives', 'socialism', 'answer', 'vast', 'need', 'majority'], ['music', 'electric', 'dance', 'least', 'others', 'festival', 'hear', 'biggest', 'deaths', 'four'], ['race', 'killed', 'hear', 'shot', 'beaten', 'makes', 'stopped', 'enter', 'shake', 'never'], ['world', 'fat', 'socially', 'form', 'others', 'many', 'shame', 'overweight', 'shaming', 'make'], ['oscar', 'others', 'podcast', 'teen', 'intelligence', 'beautiful', 'director', 'writer', 'man', 'king'], ['workers', 'hire', 'value', 'work', 'product', 'hired', 'worker', 'claiming', 'additional', 'wage'], ['film', 'york', 'festival', 'common', 'character', 'fest', 'artists', 'tightly', 'new', 'accident'], ['team', 'content', 'huffpost', 'tech', 'upon', 'collaboration', 'comment', 'system', 'site', 'news'], ['entrepreneurs', 'market', 'successful', 'valley', 'leave', 'executives', 'silicon', 'comment', 'important', 'door'], ['google', 'experience', 'adults', 'safeguards', 'make', 'users', 'open', 'special', 'breaks', 'freedom'], ['management', 'global', 'content', 'internet', 'profit', 'nations', 'government', 'groups', 'officials', 'discuss']];
var features_entertainment = [['medical', 'ways', 'use', 'patients', 'information', 'young', 'unique', 'online', 'training', 'early'], ['decades', 'labor', 'profit', 'wage', 'problem', 'national', 'many', 'industry', 'sharing', '20th'], ['focus', 'problem', 'wrote', 'phone', 'social', 'matters', 'someone', 'media', 'see', 'measure'], ['trump', 'democratic', 'campaign', 'donald', 'leader', 'game', 'general', 'violence', 'presidential', 'less'], ['republicans', 'senate', 'republican', 'mom', 'dad', 'bill', 'equal', 'single', 'work', 'pay'], ['meditation', 'simple', 'help', 'key', 'time', 'meditate', 'thrive', 'thank', 'daily', 'consistency'], ['box', 'business', 'ways', 'outside', 'problems', 'thinking', 'traditional', 'acknowledge', 'climb', 'innovative'], ['tv', 'phone', 'communications', 'customer', 'perspective', 'line', 'slow', 'services', 'watching', 'motion'], ['singer', 'festival', 'arizona', 'artists', 'performing', 'day', 'several', 'may', 'old', 'angeles'], ['benefits', 'political', 'lives', 'need', 'making', 'socialism', 'spread', 'better', 'answer', 'productivity'], ['music', 'dance', 'deaths', 'festival', 'others', 'nation', 'hospitalization', 'least', 'journalist', 'media'], ['race', 'somehow', 'killed', 'latino', 'men', 'makes', 'untold', 'black', 'areas', 'american'], ['people', 'fun', 'others', 'fat', 'many', 'progress', 'shaming', 'form', 'right', 'acceptable'], ['oscar', 'director', 'intelligence', 'others', 'podcast', 'writer', 'fisher', 'spotlight', 'princess', 'teen'], ['workers', 'theory', 'value', 'work', 'worker', 'wage', 'product', 'less', 'people', 'hit'], ['film', 'festival', 'york', 'character', 'common', 'artists', 'striking', 'fest', 'jones', 'new'], ['tech', 'huffpost', 'site', 'digital', 'technology', 'ultimate', 'collaboration', 'create', 'news', 'content'], ['market', 'successful', 'education', 'entrepreneurs', 'important', 'products', 'keep', 'valley', 'door', 'silicon'], ['google', 'users', 'safeguards', 'teens', 'adults', 'open', 'breaks', 'experience', 'freedom', '18'], ['internet', 'government', 'global', 'policy', 'officials', 'groups', 'discuss', 'profit', 'many', 'corporations']];
var features_healthy = [['medical', 'twitter', 'patients', 'ways', 'online', 'offers', 'opinions', 'voice', 'physician', 'training'], ['profit', 'sharing', 'labor', 'american', 'war', 'national', 'wage', 'half', 'share', 'managers'], ['dreams', 'someone', 'media', 'wrote', 'action', 'minute', 'taking', 'focus', 'home', 'measure'], ['trump', 'democratic', 'campaign', 'donald', 'presidential', 'something', 'leader', 'confidence', 'outside', 'successful'], ['bill', 'republican', 'republicans', 'senate', 'pay', 'men', 'goal', 'proposing', 'work', 'time'], ['meditation', 'meditate', 'simple', 'consistency', 'routine', 'help', 'time', 'key', 'thrive', 'specific'], ['business', 'ways', 'box', 'american', 'acknowledge', 'based', 'outside', 'out', 'possible', 'innovative'], ['perspective', 'services', 'internet', 'tv', 'communications', 'years', 'customer', '30', 'wreck', 'trend'], ['singer', 'festival', 'may', 'day', 'old', 'artists', 'look', 'alabama', 'upcoming', 'songwriter'], ['political', 'benefits', 'revolution', 'better', 'need', 'lives', 'capitalism', 'will', 'socialism', 'vast'], ['music', 'deaths', 'festival', 'dance', 'nation', 'drugs', 'thoughts', 'others', 'sunday', 'electric'], ['life', 'race', 'american', 'black', 'areas', 'stories', 'men', 'latino', 'somehow', 'always'], ['fat', 'overweight', 'made', 'do', 'make', 'shame', 'last', 'sadly', 'right', 'legally'], ['oscar', 'director', 'podcast', 'others', 'king', 'richard', 'beautiful', 'spotlight', 'praise', 'intelligence'], ['workers', 'hire', 'wage', 'easy', 'product', 'paid', 'claiming', 'value', 'last', 'hired'], ['film', 'festival', 'common', 'character', 'sometimes', 'jones', 'usually', 'fest', 'artists', 'especially'], ['tech', 'huffpost', 'content', 'thought', 'huffington', 'site', 'technology', 'digital', 'news', 'team'], ['entrepreneurs', 'market', 'keep', 'leave', '12', 'executives', 'importance', 'comment', 'silicon', 'successful'], ['google', 'teens', 'users', 'part', 'make', 'giving', 'adults', 'special', 'freedom', 'open'], ['government', 'policy', 'forum', 'profit', 'corporations', 'content', 'internet', 'issues', 'officials', 'groups']];
var features_politics = [['ways', 'medical', 'online', 'opinions', 'patients', 'twitter', 'offers', 'increasingly', 'professional', 'use'], ['growth', 'sharing', 'war', 'decades', 'managers', 'national', 'industry', 'half', 'american', 'stand'], ['dreams', 'phone', 'measure', 'focus', 'social', 'media', 'talking', 'home', 'minute', 'toward'], ['trump', 'democratic', 'campaign', 'successful', 'violence', 'presidential', 'general', 'game', 'leader', 'rules'], ['republicans', 'senate', 'bill', 'republican', 'gap', 'mom', 'equal', 'act', 'paycheck', 'voted'], ['meditation', 'simple', 'meditate', 'daily', 'time', 'thrive', 'routine', 'specific', 'still', 'say'], ['business', 'box', 'american', 'ways', 'innovative', 'traditional', 'climb', 'complex', 'solving', 'solutions'], ['internet', 'customer', 'phone', 'tv', 'continue', '2015', 'services', 'wireless', 'sucks', 'watching'], ['singer', 'festival', 'arizona', 'artists', 'performing', 'alabama', 'several', 'old', 'gulf', 'closer'], ['political', 'productivity', 'better', 'revolution', 'need', 'socialism', 'will', 'spread', 'answer', 'spreads'], ['music', 'nation', 'dance', 'festival', 'journalist', 'deaths', 'media', 'thoughts', 'covers', 'hospitalization'], ['race', 'american', 'life', 'killed', 'latino', 'men', 'always', 'somehow', 'nothing', 'untold'], ['right', 'form', 'make', 'fun', 'fat', 'do', 'progress', 'toward', 'of', 'overweight'], ['oscar', 'intelligence', 'director', 'writer', 'fisher', 'nominee', 'podcast', 'beautiful', 'others', 'spotlight'], ['hire', 'workers', 'value', 'work', 'worker', 'additional', 'hired', 'base', 'product', 'make'], ['film', 'festival', 'character', 'york', 'artists', 'striking', 'according', 'rule', 'new', 'fest'], ['huffpost', 'technology', 'tech', 'digital', 'content', 'collaboration', 'system', 'create', 'share', 'newsroom'], ['entrepreneurs', 'education', 'successful', 'market', 'products', 'important', 'door', 'executives', 'comment', 'seem'], ['google', 'freedom', 'special', 'users', 'giving', 'default', 'experience', 'make', 'safeguards', 'major'], ['internet', 'government', 'content', 'nations', 'policy', 'officials', 'groups', 'management', 'global', 'governance']];
var features_tech = [['twitter', 'medical', 'online', 'ways', 'patients', 'opportunity', 'level', 'providers', 'use', 'information'], ['sharing', 'profit', 'labor', 'decades', 'american', 'wage', 'national', 'share', 'new', 'strong'], ['phone', 'focus', 'social', 'media', 'toward', 'relative', 'measure', 'talking', 'see', 'action'], ['trump', 'democratic', 'campaign', 'game', 'donald', 'new', 'presidential', 'general', 'strong', 'violence'], ['bill', 'republicans', 'senate', 'republican', 'blocked', 'gap', 'equal', 'yet', 'right', 'voted'], ['meditation', 'moment', 'meditate', 'still', 'routine', 'specific', 'time', 'consistency', 'daily', 'picking'], ['ways', 'business', 'tons', 'really', 'american', 'solving', 'idea', 'box', 'innovative', 'out'], ['internet', 'phone', 'services', 'wireless', 'trend', 'perspective', '2015', 'broadband', 'train', 'watching'], ['singer', 'feature', '2015', 'festival', 'may', 'now', 'will', 'performing', 'artists', 'days'], ['productivity', 'political', 'benefits', 'will', 'spread', 'revolution', 'capitalism', 'better', 'need', 'vast'], ['music', 'electric', 'zoo', 'dance', 'media', 'least', 'hear', 'festival', 'story', 'four'], ['race', 'american', 'hear', 'idea', 'areas', 'makes', 'black', 'life', 'always', 'beaten'], ['others', 'world', 'of', 'fat', 'toward', 'made', 'fun', 'progress', 'right', 'still'], ['oscar', 'intelligence', 'director', 'podcast', 'writer', 'among', 'fisher', 'princess', 'beautiful', 'romance'], ['workers', 'work', 'paid', 'value', 'wage', 'exceptions', 'theory', 'worker', 'less', 'hire'], ['film', 'festival', 'york', 'new', 'character', 'jones', 'curated', 'happen', 'fest', 'artists'], ['tech', 'technology', 'digital', 'site', 'team', 'upon', 'huffpost', 'content', 'share', 'delivery'], ['valley', 'silicon', 'successful', 'entrepreneurs', 'market', 'education', 'leave', 'effective', 'important', 'products'], ['google', 'teens', 'safeguards', 'users', 'part', 'default', 'open', 'major', 'make', 'now'], ['internet', 'discuss', 'governance', 'policy', 'content', 'forum', 'united', 'corporations', 'handle', 'nations']];

var importance_business = [[0.06530799853400741, 0.0591087742057983, -0.05642232189871139, 0.045184189854240976, -0.04273192018726719, -0.04251624639204852, -0.026439004610051716, 0.025125803504241182, 0.021560498803472532, 0.019423356057072284], [0.11290035142823113, 0.09926691629280775, -0.08971914078349642, 0.07778181537226946, 0.0773431842592617, -0.07296627231012293, 0.06313514703935175, -0.047555191319145415, 0.046250142465271274, 0.04482786488624437], [-0.035419291012297204, 0.021898471382301343, 0.020567286813346082, 0.01972531253487139, -0.01301424505962871, -0.012733978225129597, -0.012477360703766203, 0.010829517599316647, 0.009077783239388681, 0.008674856737070599], [-0.05605645545275199, -0.028541574577082326, -0.017582809262909456, 0.016889043731734624, -0.007655929057408466, 0.005088119051651931, -0.004670351405273943, 0.00450333782936923, -0.004302360330177439, -0.003028177901535194], [-0.0652749248921421, -0.0507576224835839, -0.04983424935376931, -0.03975864870070674, 0.03947605281101051, 0.03283999513426894, 0.02999889604616544, -0.021205398263907237, 0.018747018631114137, 0.01581010096678565], [-0.07723074499967483, -0.027061971844203326, 0.019947491011311647, -0.015319476672673343, -0.009247665028724223, -0.008228933776725332, -0.00782275014106473, 0.00757414718648927, 0.005187195058835829, 0.004907007576664301], [0.35349962408013336, -0.16433516066500403, 0.05546549450692676, 0.05231253081113247, 0.04970723854860658, 0.04149496741956697, -0.03578595848985802, 0.032452877939877646, 0.031009295036537158, 0.029874503823419326], [0.09197145264458217, -0.05855658464818671, 0.050017351801856444, -0.04625496054002744, 0.04179843209607881, -0.03295462291580086, 0.03178636774046444, 0.02943493745847078, -0.027910195605907195, -0.02321454321458466], [-0.03798781970908138, -0.017813924132892695, -0.011437266040159202, 0.009684390379036394, 0.008762889520391243, 0.006629377078574514, -0.00509765823655024, 0.004932794336579123, -0.004705290650253558, 0.004450040150658025], [0.1068236781614154, 0.05837496769160013, -0.057637638656564544, -0.03931474869046642, -0.034818681714776326, -0.025377200391813824, 0.018082852331302062, -0.017377833033450005, 0.017063578921282074, 0.015422972499936084], [-0.0911864060155564, 0.027207429379704145, -0.01974730541663428, 0.014375165549115911, 0.013668838440037344, -0.0127214012538818, -0.010417579499544962, 0.00831558917660762, -0.00789735395428273, 0.005278964130873724], [-0.04083490146774913, -0.01381356361275029, -0.01140287111014111, -0.01136727169977129, 0.00863028241225503, 0.005771139680399254, 0.005684881732419403, 0.005377080720421283, 0.005324919779106435, -0.0038803220511077824], [0.03334204759018391, -0.028073525653916062, 0.026707209769303217, -0.025202010108400806, 0.022496762357366216, 0.018901957276889685, -0.017423334754014065, -0.016284273645026177, -0.01497293069812247, 0.014762710188581961], [-0.020953468239915788, 0.016052000753143215, -0.012450353569647073, -0.010350443179355562, 0.009901227255176863, -0.009317470065593, -0.008251238933064724, -0.00734010244380047, -0.006584817446551356, -0.006207709229059986], [0.1417873675149564, 0.0918813795919487, 0.08764222982527721, 0.07776827626727323, 0.05862263214828232, 0.05075009898934891, 0.04870165130362898, -0.04502606070927848, -0.0332214367071885, 0.03175339472515905], [-0.08816620800343468, 0.0262285026324883, -0.025827042978644486, 0.012764516209901319, -0.011151439631140982, -0.008452742032836016, -0.008019419277651953, 0.006199146666571678, -0.006067765455374312, -0.00459449444760616], [0.05690666123004295, 0.05117302647985714, -0.0498151228463916, -0.047416049587035776, 0.04522530631478007, 0.03795014198819551, 0.03761797329097349, -0.036002960424243786, -0.030315714911856584, -0.02819608711243652], [0.14960812259326547, 0.12921745233775742, 0.10031224369460211, -0.09023177649037985, 0.06832569266803984, 0.06056255994390747, -0.058908838666537365, 0.04209430750700186, 0.032264105630378424, 0.030535830382924945], [-0.037610734292645866, 0.018413241893433636, -0.010608699729838147, 0.009776519021488524, 0.009707299512232417, -0.009054176625604985, 0.009016441733405151, -0.007659927241539694, -0.0076440287577234645, -0.006114416776024792], [0.08497570464494948, 0.08382148205798298, 0.07138750434585159, -0.03964922101166548, 0.03697259063746858, -0.03681148393756225, -0.0341553007021837, -0.02608371581340732, -0.025718768077746288, -0.024681738597428268]];
var importance_business_pos = [[0.06530799853400741, 0.0591087742057983, 0, 0.045184189854240976, 0, 0, 0, 0.025125803504241182, 0.021560498803472532, 0.019423356057072284], [0.11290035142823113, 0.09926691629280775, 0, 0.07778181537226946, 0.0773431842592617, 0, 0.06313514703935175, 0, 0.046250142465271274, 0.04482786488624437], [0, 0.021898471382301343, 0.020567286813346082, 0.01972531253487139, 0, 0, 0, 0.010829517599316647, 0.009077783239388681, 0.008674856737070599], [0, 0, 0, 0.016889043731734624, 0, 0.005088119051651931, 0, 0.00450333782936923, 0, 0], [0, 0, 0, 0, 0.03947605281101051, 0.03283999513426894, 0.02999889604616544, 0, 0.018747018631114137, 0.01581010096678565], [0, 0, 0.019947491011311647, 0, 0, 0, 0, 0.00757414718648927, 0.005187195058835829, 0.004907007576664301], [0.35349962408013336, 0, 0.05546549450692676, 0.05231253081113247, 0.04970723854860658, 0.04149496741956697, 0, 0.032452877939877646, 0.031009295036537158, 0.029874503823419326], [0.09197145264458217, 0, 0.050017351801856444, 0, 0.04179843209607881, 0, 0.03178636774046444, 0.02943493745847078, 0, 0], [0, 0, 0, 0.009684390379036394, 0.008762889520391243, 0.006629377078574514, 0, 0.004932794336579123, 0, 0.004450040150658025], [0.1068236781614154, 0.05837496769160013, 0, 0, 0, 0, 0.018082852331302062, 0, 0.017063578921282074, 0.015422972499936084], [0, 0.027207429379704145, 0, 0.014375165549115911, 0.013668838440037344, 0, 0, 0.00831558917660762, 0, 0.005278964130873724], [0, 0, 0, 0, 0.00863028241225503, 0.005771139680399254, 0.005684881732419403, 0.005377080720421283, 0.005324919779106435, 0], [0.03334204759018391, 0, 0.026707209769303217, 0, 0.022496762357366216, 0.018901957276889685, 0, 0, 0, 0.014762710188581961], [0, 0.016052000753143215, 0, 0, 0.009901227255176863, 0, 0, 0, 0, 0], [0.1417873675149564, 0.0918813795919487, 0.08764222982527721, 0.07776827626727323, 0.05862263214828232, 0.05075009898934891, 0.04870165130362898, 0, 0, 0.03175339472515905], [0, 0.0262285026324883, 0, 0.012764516209901319, 0, 0, 0, 0.006199146666571678, 0, 0], [0.05690666123004295, 0.05117302647985714, 0, 0, 0.04522530631478007, 0.03795014198819551, 0.03761797329097349, 0, 0, 0], [0.14960812259326547, 0.12921745233775742, 0.10031224369460211, 0, 0.06832569266803984, 0.06056255994390747, 0, 0.04209430750700186, 0.032264105630378424, 0.030535830382924945], [0, 0.018413241893433636, 0, 0.009776519021488524, 0.009707299512232417, 0, 0.009016441733405151, 0, 0, 0], [0.08497570464494948, 0.08382148205798298, 0.07138750434585159, 0, 0.03697259063746858, 0, 0, 0, 0, 0]];
var importance_business_neg = [[0, 0, -0.05642232189871139, 0, -0.04273192018726719, -0.04251624639204852, -0.026439004610051716, 0, 0, 0], [0, 0, -0.08971914078349642, 0, 0, -0.07296627231012293, 0, -0.047555191319145415, 0, 0], [-0.035419291012297204, 0, 0, 0, -0.01301424505962871, -0.012733978225129597, -0.012477360703766203, 0, 0, 0], [-0.05605645545275199, -0.028541574577082326, -0.017582809262909456, 0, -0.007655929057408466, 0, -0.004670351405273943, 0, -0.004302360330177439, -0.003028177901535194], [-0.0652749248921421, -0.0507576224835839, -0.04983424935376931, -0.03975864870070674, 0, 0, 0, -0.021205398263907237, 0, 0], [-0.07723074499967483, -0.027061971844203326, 0, -0.015319476672673343, -0.009247665028724223, -0.008228933776725332, -0.00782275014106473, 0, 0, 0], [0, -0.16433516066500403, 0, 0, 0, 0, -0.03578595848985802, 0, 0, 0], [0, -0.05855658464818671, 0, -0.04625496054002744, 0, -0.03295462291580086, 0, 0, -0.027910195605907195, -0.02321454321458466], [-0.03798781970908138, -0.017813924132892695, -0.011437266040159202, 0, 0, 0, -0.00509765823655024, 0, -0.004705290650253558, 0], [0, 0, -0.057637638656564544, -0.03931474869046642, -0.034818681714776326, -0.025377200391813824, 0, -0.017377833033450005, 0, 0], [-0.0911864060155564, 0, -0.01974730541663428, 0, 0, -0.0127214012538818, -0.010417579499544962, 0, -0.00789735395428273, 0], [-0.04083490146774913, -0.01381356361275029, -0.01140287111014111, -0.01136727169977129, 0, 0, 0, 0, 0, -0.0038803220511077824], [0, -0.028073525653916062, 0, -0.025202010108400806, 0, 0, -0.017423334754014065, -0.016284273645026177, -0.01497293069812247, 0], [-0.020953468239915788, 0, -0.012450353569647073, -0.010350443179355562, 0, -0.009317470065593, -0.008251238933064724, -0.00734010244380047, -0.006584817446551356, -0.006207709229059986], [0, 0, 0, 0, 0, 0, 0, -0.04502606070927848, -0.0332214367071885, 0], [-0.08816620800343468, 0, -0.025827042978644486, 0, -0.011151439631140982, -0.008452742032836016, -0.008019419277651953, 0, -0.006067765455374312, -0.00459449444760616], [0, 0, -0.0498151228463916, -0.047416049587035776, 0, 0, 0, -0.036002960424243786, -0.030315714911856584, -0.02819608711243652], [0, 0, 0, -0.09023177649037985, 0, 0, -0.058908838666537365, 0, 0, 0], [-0.037610734292645866, 0, -0.010608699729838147, 0, 0, -0.009054176625604985, 0, -0.007659927241539694, -0.0076440287577234645, -0.006114416776024792], [0, 0, 0, -0.03964922101166548, 0, -0.03681148393756225, -0.0341553007021837, -0.02608371581340732, -0.025718768077746288, -0.024681738597428268]];

var importance_entertainment = [[-0.03245428813775042, -0.021543765275867946, -0.018684630059908343, -0.017731865850958373, -0.01567293737694195, 0.014755872637121994, 0.012904359056468586, -0.011608203744562924, -0.011249132943045054, -0.007933465775304785], [-0.017431495970187325, -0.015447932811589675, -0.01431797127939155, -0.011174261924024377, -0.01080643467053825, -0.009097629820297493, -0.009089673249257992, -0.008161135318644291, 0.008110276860648328, 0.005540755101230363], [-0.04787577807044178, -0.03261265837213826, 0.03119039178416589, -0.02646713004842643, -0.01818179510150161, -0.017082437619330988, -0.016383772795379215, -0.01608124929777458, 0.01586664051974076, -0.010451870468486878], [-0.05608141891785704, -0.04201317614629801, -0.03426633411775216, 0.019163623931478763, -0.013107979017636127, 0.01189625104871633, -0.011481406269711687, -0.009884932519197214, -0.006914664340309824, -0.006742768212296141], [-0.06407013669989893, -0.060253139046665204, -0.044118528383427856, 0.038621472298776126, 0.02983114209655025, -0.02972902401552187, -0.022115603728810024, 0.02031351249595747, -0.01982331849110884, -0.019715496989552984], [-0.06537861995195683, -0.02746053726954077, -0.020932551863944382, -0.017672565933454464, -0.01518498365163729, -0.0151062916720491, -0.009249863321290784, 0.008857186812519579, 0.00839597458042434, 0.006140678437290237], [0.26691205565728576, -0.16737915289346786, -0.07731488570779214, -0.03725170580634993, -0.0362216369226311, -0.03621863666925665, -0.02976679405507216, -0.02816715541801405, -0.0255143041257029, -0.02365356265221954], [0.0649461349958841, -0.061130648170683005, -0.0571360245143671, -0.03456396177876152, -0.0329041061706613, -0.02462188675841884, -0.02373660964698912, -0.02121104506813684, 0.016884070825278825, 0.014531659513499865], [0.23686544931548625, 0.1172730214402989, -0.06583101059635232, 0.060267854043492275, 0.05124130083665881, -0.04913552402045884, -0.04417939941992141, -0.04052212311268714, 0.029637057252426238, 0.026324868106985283], [-0.03787226951927513, -0.020102230286200326, -0.017759980278743797, -0.016709090438302304, -0.01071968340176747, 0.010686252736166595, -0.008023398557069827, 0.007943304704533508, -0.007562848148666036, -0.007050131812036351], [0.4926311900677011, 0.1003905190269208, -0.09710693565506176, 0.08727226736043264, -0.04947189870265085, -0.03831748412324267, 0.02830577748433906, -0.028107115212780885, -0.026822297799777538, -0.026223726396014658], [-0.08049653508121006, 0.049548300559839734, -0.04573486842957984, -0.03704400149777871, 0.03282008902991685, 0.02702006244405644, -0.025303612410091235, 0.02154221108355691, -0.02134148322847317, -0.016906238930081308], [-0.05016303355215568, 0.04069315702898759, -0.04043010630044271, -0.03435107465298795, -0.028933892127081282, -0.02419043987554623, 0.02299678989932544, -0.019977952289503796, -0.01830210105636661, 0.016871782897950743], [0.13996140986793099, 0.0786458754725216, -0.07243505090686944, -0.06432439023494933, 0.06350007687917043, 0.04680399053617605, 0.04434715077168277, 0.034904225899598566, 0.03442383297304064, 0.03378815666074706], [-0.04547349814979488, 0.04055750326627023, -0.031116080487150293, -0.02888201748405643, -0.021458782989858125, -0.0207121935626786, -0.01646872520617741, -0.016344403858674608, -0.013765693664648818, 0.008682931859806259], [0.30617962439463337, 0.10513160850040179, -0.053288335646355614, 0.051699889789593015, -0.037344017783431244, 0.02789011518604554, -0.025526912050566855, 0.025516717808891063, 0.016366247780324087, 0.013996007755733574], [-0.04535708438519913, -0.03136190801091582, -0.02709007611343104, -0.02498934431841256, -0.02397995604494662, 0.023165179573121926, 0.01705187687817776, -0.014313468280174454, -0.013885527435455354, -0.012965363044187564], [-0.022684445424994114, -0.01636101676163129, -0.015452084537290337, -0.014475114083903345, -0.013191854663569117, -0.013135788837649744, -0.011211685749449503, 0.00908308340440249, -0.00832345903189075, 0.007016518607095891], [-0.09157669210956783, -0.023813810664682494, 0.013640125596912973, -0.012216157700650461, -0.011856786652788087, -0.010589802360552554, 0.010539623937449992, -0.010113242434457397, -0.009960420701619519, 0.008411085716189405], [0.034590294435101684, -0.030059670414466857, -0.026972474937402565, -0.022139859904535212, -0.022002559865394233, -0.014920538482252887, 0.012438399249321734, -0.012249805779866093, -0.012083365143446946, -0.011528167832269603]];
var importance_entertainment_pos = [[0, 0, 0, 0, 0, 0.014755872637121994, 0.012904359056468586, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0.008110276860648328, 0.005540755101230363], [0, 0, 0.03119039178416589, 0, 0, 0, 0, 0, 0.01586664051974076, 0], [0, 0, 0, 0.019163623931478763, 0, 0.01189625104871633, 0, 0, 0, 0], [0, 0, 0, 0.038621472298776126, 0.02983114209655025, 0, 0, 0.02031351249595747, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0.008857186812519579, 0.00839597458042434, 0.006140678437290237], [0.26691205565728576, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0.0649461349958841, 0, 0, 0, 0, 0, 0, 0, 0.016884070825278825, 0.014531659513499865], [0.23686544931548625, 0.1172730214402989, 0, 0.060267854043492275, 0.05124130083665881, 0, 0, 0, 0.029637057252426238, 0.026324868106985283], [0, 0, 0, 0, 0, 0.010686252736166595, 0, 0.007943304704533508, 0, 0], [0.4926311900677011, 0.1003905190269208, 0, 0.08727226736043264, 0, 0, 0.02830577748433906, 0, 0, 0], [0, 0.049548300559839734, 0, 0, 0.03282008902991685, 0.02702006244405644, 0, 0.02154221108355691, 0, 0], [0, 0.04069315702898759, 0, 0, 0, 0, 0.02299678989932544, 0, 0, 0.016871782897950743], [0.13996140986793099, 0.0786458754725216, 0, 0, 0.06350007687917043, 0.04680399053617605, 0.04434715077168277, 0.034904225899598566, 0.03442383297304064, 0.03378815666074706], [0, 0.04055750326627023, 0, 0, 0, 0, 0, 0, 0, 0.008682931859806259], [0.30617962439463337, 0.10513160850040179, 0, 0.051699889789593015, 0, 0.02789011518604554, 0, 0.025516717808891063, 0.016366247780324087, 0.013996007755733574], [0, 0, 0, 0, 0, 0.023165179573121926, 0.01705187687817776, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0.00908308340440249, 0, 0.007016518607095891], [0, 0, 0.013640125596912973, 0, 0, 0, 0.010539623937449992, 0, 0, 0.008411085716189405], [0.034590294435101684, 0, 0, 0, 0, 0, 0.012438399249321734, 0, 0, 0]];
var importance_entertainment_neg = [[-0.03245428813775042, -0.021543765275867946, -0.018684630059908343, -0.017731865850958373, -0.01567293737694195, 0, 0, -0.011608203744562924, -0.011249132943045054, -0.007933465775304785], [-0.017431495970187325, -0.015447932811589675, -0.01431797127939155, -0.011174261924024377, -0.01080643467053825, -0.009097629820297493, -0.009089673249257992, -0.008161135318644291, 0, 0], [-0.04787577807044178, -0.03261265837213826, 0, -0.02646713004842643, -0.01818179510150161, -0.017082437619330988, -0.016383772795379215, -0.01608124929777458, 0, -0.010451870468486878], [-0.05608141891785704, -0.04201317614629801, -0.03426633411775216, 0, -0.013107979017636127, 0, -0.011481406269711687, -0.009884932519197214, -0.006914664340309824, -0.006742768212296141], [-0.06407013669989893, -0.060253139046665204, -0.044118528383427856, 0, 0, -0.02972902401552187, -0.022115603728810024, 0, -0.01982331849110884, -0.019715496989552984], [-0.06537861995195683, -0.02746053726954077, -0.020932551863944382, -0.017672565933454464, -0.01518498365163729, -0.0151062916720491, -0.009249863321290784, 0, 0, 0], [0, -0.16737915289346786, -0.07731488570779214, -0.03725170580634993, -0.0362216369226311, -0.03621863666925665, -0.02976679405507216, -0.02816715541801405, -0.0255143041257029, -0.02365356265221954], [0, -0.061130648170683005, -0.0571360245143671, -0.03456396177876152, -0.0329041061706613, -0.02462188675841884, -0.02373660964698912, -0.02121104506813684, 0, 0], [0, 0, -0.06583101059635232, 0, 0, -0.04913552402045884, -0.04417939941992141, -0.04052212311268714, 0, 0], [-0.03787226951927513, -0.020102230286200326, -0.017759980278743797, -0.016709090438302304, -0.01071968340176747, 0, -0.008023398557069827, 0, -0.007562848148666036, -0.007050131812036351], [0, 0, -0.09710693565506176, 0, -0.04947189870265085, -0.03831748412324267, 0, -0.028107115212780885, -0.026822297799777538, -0.026223726396014658], [-0.08049653508121006, 0, -0.04573486842957984, -0.03704400149777871, 0, 0, -0.025303612410091235, 0, -0.02134148322847317, -0.016906238930081308], [-0.05016303355215568, 0, -0.04043010630044271, -0.03435107465298795, -0.028933892127081282, -0.02419043987554623, 0, -0.019977952289503796, -0.01830210105636661, 0], [0, 0, -0.07243505090686944, -0.06432439023494933, 0, 0, 0, 0, 0, 0], [-0.04547349814979488, 0, -0.031116080487150293, -0.02888201748405643, -0.021458782989858125, -0.0207121935626786, -0.01646872520617741, -0.016344403858674608, -0.013765693664648818, 0], [0, 0, -0.053288335646355614, 0, -0.037344017783431244, 0, -0.025526912050566855, 0, 0, 0], [-0.04535708438519913, -0.03136190801091582, -0.02709007611343104, -0.02498934431841256, -0.02397995604494662, 0, 0, -0.014313468280174454, -0.013885527435455354, -0.012965363044187564], [-0.022684445424994114, -0.01636101676163129, -0.015452084537290337, -0.014475114083903345, -0.013191854663569117, -0.013135788837649744, -0.011211685749449503, 0, -0.00832345903189075, 0], [-0.09157669210956783, -0.023813810664682494, 0, -0.012216157700650461, -0.011856786652788087, -0.010589802360552554, 0, -0.010113242434457397, -0.009960420701619519, 0], [0, -0.030059670414466857, -0.026972474937402565, -0.022139859904535212, -0.022002559865394233, -0.014920538482252887, 0, -0.012249805779866093, -0.012083365143446946, -0.011528167832269603]];

var importance_healthy = [[0.27264745175375094, -0.20469258983836794, 0.11633119383166694, 0.1109141861851756, -0.06219964793126514, -0.05269023260660354, -0.042860729793530915, 0.03521786057829347, 0.03521442082114645, 0.03368547740827285], [-0.03609702304241641, 0.02399600649169303, -0.02314571464376914, -0.018221217660282014, -0.016588239141392756, -0.014941048971727308, -0.014635248484344677, 0.011945406601353886, 0.011562495610990441, -0.01151147041220129], [0.17751747639862617, 0.07159013036086129, -0.06555814433197475, -0.06327621979958091, -0.05372369517984388, 0.04558067001765706, 0.030910943562566247, 0.02796823559889734, 0.02590863794333145, -0.023122808401006643], [-0.03828682962787281, -0.020556039006150734, -0.017050744872060066, -0.011042628994541304, -0.00800537596485779, 0.006474404963044524, -0.0057310994624984995, 0.005626572981362545, 0.005237574093169365, 0.004527829164113477], [-0.02992676133794536, -0.02125523068413316, -0.02054662439365433, -0.019823460172646246, -0.00856159714040615, 0.00744079349797912, 0.006548947387143373, 0.006515883070323685, 0.006413728844022895, 0.005382110873146929], [0.2390525015750272, 0.06200112792169629, 0.05656639644124246, -0.03951056817567537, 0.03340842814959754, 0.03310052922282537, 0.025106666419127545, 0.02426998098476397, 0.02179581423295165, 0.021682840506963487], [-0.13029246318931603, 0.07598401063173119, -0.05821021391570953, -0.05090680602245321, 0.04052126870041634, -0.033485326593088206, 0.0314673601027594, 0.026204213033154754, 0.025322826988557617, -0.013141444694741967], [0.04560755297348051, -0.03421227508333093, -0.032178667994690116, -0.0222429787423074, -0.018156055234234362, -0.016513848967494988, -0.015359569766857829, 0.011272133290322029, 0.01089170600552593, 0.009541472177365782], [-0.048186996261759645, -0.025485954897503924, 0.024412832344830666, 0.019530221648497558, -0.0089685820873949, -0.008343129791042321, -0.0073673753366454, -0.007196027408673801, -0.0062496958163893715, -0.006069462931243265], [-0.09973740325284425, 0.09349211575686099, -0.07947420134044995, 0.07037482009578859, 0.06151847504956164, 0.047657154430289936, -0.04669484037204363, -0.038717476819540055, -0.03165765126649147, 0.021816611896094948], [-0.14135187664736332, 0.07911936202915637, -0.0285295891263428, -0.023290978239979623, -0.023180945420134, 0.021911191646199053, 0.019658519636274713, 0.018551119537503446, -0.014638783649633946, -0.012771095757149735], [0.0818586755943625, -0.07605683342221684, -0.0694383509787693, -0.04156511128173894, 0.02875853762437665, 0.024124262629702024, 0.020281365850898098, -0.01733383275565566, -0.01705455528998254, 0.016009473594686588], [0.11086909916901208, 0.05001676199967624, -0.0453671227307248, 0.04154104242472926, 0.03877153779390166, 0.03642595145343186, -0.034825102179249126, -0.034824058013005, -0.034700378612922245, -0.03285493215608522], [-0.037468251235254886, -0.027465537778781135, -0.02050072115604839, 0.018910075953873316, -0.015445803038939903, -0.011959743557512323, 0.010554835231439406, -0.009847877086590823, 0.00973203167999092, 0.00877433189448592], [-0.04716492775280078, -0.022191149805823228, -0.01933914270265989, 0.018752124497440868, -0.018435591063988004, -0.017002681784688004, 0.016419826747770854, -0.015227636857414817, -0.010019397427441503, -0.009307094885608214], [-0.08366444583886039, -0.03208596215206444, 0.017864454161303042, -0.014458813647531259, 0.011646933202832863, -0.011368307754381541, 0.008733785943353587, -0.007121890532023531, -0.006021104340072383, 0.005895367567053554], [-0.03506076787686278, -0.029718022807061803, -0.022673665842560423, 0.018130884387894848, 0.01804340394097027, -0.015324759583492907, -0.01393669887020528, -0.010329176943627411, -0.007765942282403843, -0.0077600146353295285], [-0.06980836063935673, -0.05234126645318062, 0.03661323859974681, -0.03380918606547903, 0.028082322622015977, -0.026871337885689937, 0.024315582002476313, -0.023428646483596462, -0.02252885601033188, -0.017254984406413265], [-0.2502072427994673, 0.10813149669604558, -0.02574335098872334, 0.024076950982400053, 0.023722644027181446, 0.02280944291249827, 0.02044929216404141, -0.019139525365090344, -0.018703552406673388, 0.016456144545384903], [-0.012231680715437301, -0.008390123908684176, 0.00765596291199987, -0.007323373379754268, -0.006184302073952509, -0.006067314334532344, -0.006019869653152678, -0.0055194631448068215, -0.004022605508108632, -0.0024813385877127435]];
var importance_healthy_pos = [[0.27264745175375094, 0, 0.11633119383166694, 0.1109141861851756, 0, 0, 0, 0.03521786057829347, 0.03521442082114645, 0.03368547740827285], [0, 0.02399600649169303, 0, 0, 0, 0, 0, 0.011945406601353886, 0.011562495610990441, 0], [0.17751747639862617, 0.07159013036086129, 0, 0, 0, 0.04558067001765706, 0.030910943562566247, 0.02796823559889734, 0.02590863794333145, 0], [0, 0, 0, 0, 0, 0.006474404963044524, 0, 0.005626572981362545, 0.005237574093169365, 0.004527829164113477], [0, 0, 0, 0, 0, 0.00744079349797912, 0.006548947387143373, 0.006515883070323685, 0.006413728844022895, 0.005382110873146929], [0.2390525015750272, 0.06200112792169629, 0.05656639644124246, 0, 0.03340842814959754, 0.03310052922282537, 0.025106666419127545, 0.02426998098476397, 0.02179581423295165, 0.021682840506963487], [0, 0.07598401063173119, 0, 0, 0.04052126870041634, 0, 0.0314673601027594, 0.026204213033154754, 0.025322826988557617, 0], [0.04560755297348051, 0, 0, 0, 0, 0, 0, 0.011272133290322029, 0.01089170600552593, 0.009541472177365782], [0, 0, 0.024412832344830666, 0.019530221648497558, 0, 0, 0, 0, 0, 0], [0, 0.09349211575686099, 0, 0.07037482009578859, 0.06151847504956164, 0.047657154430289936, 0, 0, 0, 0.021816611896094948], [0, 0.07911936202915637, 0, 0, 0, 0.021911191646199053, 0.019658519636274713, 0.018551119537503446, 0, 0], [0.0818586755943625, 0, 0, 0, 0.02875853762437665, 0.024124262629702024, 0.020281365850898098, 0, 0, 0.016009473594686588], [0.11086909916901208, 0.05001676199967624, 0, 0.04154104242472926, 0.03877153779390166, 0.03642595145343186, 0, 0, 0, 0], [0, 0, 0, 0.018910075953873316, 0, 0, 0.010554835231439406, 0, 0.00973203167999092, 0.00877433189448592], [0, 0, 0, 0.018752124497440868, 0, 0, 0.016419826747770854, 0, 0, 0], [0, 0, 0.017864454161303042, 0, 0.011646933202832863, 0, 0.008733785943353587, 0, 0, 0.005895367567053554], [0, 0, 0, 0.018130884387894848, 0.01804340394097027, 0, 0, 0, 0, 0], [0, 0, 0.03661323859974681, 0, 0.028082322622015977, 0, 0.024315582002476313, 0, 0, 0], [0, 0.10813149669604558, 0, 0.024076950982400053, 0.023722644027181446, 0.02280944291249827, 0.02044929216404141, 0, 0, 0.016456144545384903], [0, 0, 0.00765596291199987, 0, 0, 0, 0, 0, 0, 0]];
var importance_healthy_neg = [[0, -0.20469258983836794, 0, 0, -0.06219964793126514, -0.05269023260660354, -0.042860729793530915, 0, 0, 0], [-0.03609702304241641, 0, -0.02314571464376914, -0.018221217660282014, -0.016588239141392756, -0.014941048971727308, -0.014635248484344677, 0, 0, -0.01151147041220129], [0, 0, -0.06555814433197475, -0.06327621979958091, -0.05372369517984388, 0, 0, 0, 0, -0.023122808401006643], [-0.03828682962787281, -0.020556039006150734, -0.017050744872060066, -0.011042628994541304, -0.00800537596485779, 0, -0.0057310994624984995, 0, 0, 0], [-0.02992676133794536, -0.02125523068413316, -0.02054662439365433, -0.019823460172646246, -0.00856159714040615, 0, 0, 0, 0, 0], [0, 0, 0, -0.03951056817567537, 0, 0, 0, 0, 0, 0], [-0.13029246318931603, 0, -0.05821021391570953, -0.05090680602245321, 0, -0.033485326593088206, 0, 0, 0, -0.013141444694741967], [0, -0.03421227508333093, -0.032178667994690116, -0.0222429787423074, -0.018156055234234362, -0.016513848967494988, -0.015359569766857829, 0, 0, 0], [-0.048186996261759645, -0.025485954897503924, 0, 0, -0.0089685820873949, -0.008343129791042321, -0.0073673753366454, -0.007196027408673801, -0.0062496958163893715, -0.006069462931243265], [-0.09973740325284425, 0, -0.07947420134044995, 0, 0, 0, -0.04669484037204363, -0.038717476819540055, -0.03165765126649147, 0], [-0.14135187664736332, 0, -0.0285295891263428, -0.023290978239979623, -0.023180945420134, 0, 0, 0, -0.014638783649633946, -0.012771095757149735], [0, -0.07605683342221684, -0.0694383509787693, -0.04156511128173894, 0, 0, 0, -0.01733383275565566, -0.01705455528998254, 0], [0, 0, -0.0453671227307248, 0, 0, 0, -0.034825102179249126, -0.034824058013005, -0.034700378612922245, -0.03285493215608522], [-0.037468251235254886, -0.027465537778781135, -0.02050072115604839, 0, -0.015445803038939903, -0.011959743557512323, 0, -0.009847877086590823, 0, 0], [-0.04716492775280078, -0.022191149805823228, -0.01933914270265989, 0, -0.018435591063988004, -0.017002681784688004, 0, -0.015227636857414817, -0.010019397427441503, -0.009307094885608214], [-0.08366444583886039, -0.03208596215206444, 0, -0.014458813647531259, 0, -0.011368307754381541, 0, -0.007121890532023531, -0.006021104340072383, 0], [-0.03506076787686278, -0.029718022807061803, -0.022673665842560423, 0, 0, -0.015324759583492907, -0.01393669887020528, -0.010329176943627411, -0.007765942282403843, -0.0077600146353295285], [-0.06980836063935673, -0.05234126645318062, 0, -0.03380918606547903, 0, -0.026871337885689937, 0, -0.023428646483596462, -0.02252885601033188, -0.017254984406413265], [-0.2502072427994673, 0, -0.02574335098872334, 0, 0, 0, 0, -0.019139525365090344, -0.018703552406673388, 0], [-0.012231680715437301, -0.008390123908684176, 0, -0.007323373379754268, -0.006184302073952509, -0.006067314334532344, -0.006019869653152678, -0.0055194631448068215, -0.004022605508108632, -0.0024813385877127435]];

var importance_politics = [[-0.04315185432407756, -0.041045793879617286, -0.03859290458733168, 0.03261398280008539, -0.03094938993278106, 0.02444597656937171, -0.021927327300924088, 0.02041635659969615, -0.019501474857927317, -0.015279908298332562], [-0.1194660344017302, -0.1190231632025405, 0.1095300640713781, 0.09228431520579566, -0.08647109478632649, 0.07162450140414325, -0.06979009342978759, -0.04647398717998633, 0.04574550834860791, 0.03870065077661678], [-0.14627983449087378, -0.060792715802591504, 0.05907058031922858, 0.05417254732819587, -0.05207605026915348, 0.04784573226526843, 0.047256080956712763, -0.04199325363386633, -0.04080610997970918, 0.03621825677364058], [0.16178073229414958, 0.09504548898587814, 0.07107349417234338, -0.02740046805966591, 0.020292269378198023, 0.01922109015541119, 0.01585702148891843, -0.01418447281992101, 0.012926496558473019, 0.00783664808857641], [0.1242309095060287, 0.11859840805446681, 0.11622531002366354, 0.09439239073005817, -0.05915366304613041, -0.05574122990933235, 0.02488264252785317, 0.021070723130507917, 0.020398301090571974, 0.014723014186753295], [-0.07692295820731813, -0.02481142445754769, -0.020794597704090895, -0.013044452365845985, -0.012095855015974596, -0.011243283122644379, -0.010633733202288423, -0.010378664775962266, 0.009453097618694943, 0.0091621446446718], [-0.05609246860413219, -0.05285617237888492, 0.033053362493601635, -0.027191126857048362, -0.021010942092220534, -0.020880980295319207, -0.017529459647223508, 0.015072491217987276, 0.01334402519313404, 0.009685271239137013], [-0.05621635241609492, -0.053019666752200864, -0.037530656846094634, -0.03119445786355891, 0.029016828297879688, -0.027718427107445324, 0.02556969419524588, -0.01786990712194537, 0.0166617112321647, -0.016346876103107682], [-0.1320504888470372, -0.0728666842224008, 0.04902462700648653, -0.04472696733651903, -0.04189529556872646, 0.03673768751153254, 0.028379019828563015, -0.022880139255121005, 0.01965919060389447, 0.016549921191581208], [0.1866385672382471, -0.12011855430758511, -0.07277286882807474, 0.0699953817029928, -0.06511578841373934, 0.04870728392348827, 0.03442955279336905, 0.02458861384988584, -0.024317696173402462, -0.01646841348613865], [-0.22960939572493957, 0.05879119015529107, -0.05328960468507968, -0.04365581843424057, 0.029714929876408, 0.02553647446566035, 0.02404391769864712, -0.020028782524059124, -0.016959719007696043, -0.016720096667241082], [0.2057176638682339, 0.09262072457365454, -0.0756939704633743, 0.07416412919346561, 0.055879131430934904, -0.05274677422718157, -0.038272363073374095, -0.03387293085348274, -0.031275234375337566, 0.022432504987518018], [0.05756103892913699, 0.053452695346524616, -0.04647956387817115, -0.04311766269242395, -0.038684154375947556, -0.03866087826257287, 0.036547332566634526, 0.03508232881977189, 0.03443886203459731, -0.02666433537735053], [-0.07638692725950909, 0.04398995900087895, -0.0428884622944607, -0.0369357373374701, -0.034896899203342616, 0.03146579389415872, -0.031270968338652755, -0.02453911353002827, 0.024538189090342166, -0.023739086652620426], [-0.053082364884085353, -0.0416151238739133, -0.036686554836381995, -0.035578263505813834, -0.029150257970261682, 0.02802171034999685, -0.02793808561310909, 0.025774784558149084, -0.02491174640215944, -0.0198586791702822], [-0.10681577592288259, -0.043463618000565675, -0.023182682161670735, 0.018571717949851064, -0.013607102071173655, 0.012954786521818884, -0.010303868564766509, 0.009430528526860176, -0.00927018498219298, -0.009124733063409843], [0.1454907152348812, -0.09523057719134541, -0.0948140160373338, -0.0893941238844528, -0.053342198584442516, -0.038242197655494053, 0.03785745980111628, -0.034873969366501015, -0.02725586612939608, 0.021541800381141295], [-0.04315288605643051, 0.0426862922893931, -0.03869854846602816, -0.03611800578205066, -0.031178486390031943, -0.018724918307068884, -0.017764512644351135, -0.01639602267898466, -0.01449856330108442, 0.011278397264675449], [-0.33083728530844414, 0.04250444929076922, 0.029164095591145175, 0.023347076272388318, -0.020881019123004236, 0.020595167879498753, -0.019928340627061628, -0.019044695884700952, 0.018154149106714302, -0.011693550168344823], [-0.22169990988473295, 0.0877762514172394, -0.08410182774891702, 0.07932378602006801, 0.07625885265753736, 0.07535653953729007, 0.06570178671345389, -0.06237075931097433, -0.059482431252496346, 0.05937118055846701]];
var importance_politics_pos = [[0, 0, 0, 0.03261398280008539, 0, 0.02444597656937171, 0, 0.02041635659969615, 0, 0], [0, 0, 0.1095300640713781, 0.09228431520579566, 0, 0.07162450140414325, 0, 0, 0.04574550834860791, 0.03870065077661678], [0, 0, 0.05907058031922858, 0.05417254732819587, 0, 0.04784573226526843, 0.047256080956712763, 0, 0, 0.03621825677364058], [0.16178073229414958, 0.09504548898587814, 0.07107349417234338, 0, 0.020292269378198023, 0.01922109015541119, 0.01585702148891843, 0, 0.012926496558473019, 0.00783664808857641], [0.1242309095060287, 0.11859840805446681, 0.11622531002366354, 0.09439239073005817, 0, 0, 0.02488264252785317, 0.021070723130507917, 0.020398301090571974, 0.014723014186753295], [0, 0, 0, 0, 0, 0, 0, 0, 0.009453097618694943, 0.0091621446446718], [0, 0, 0.033053362493601635, 0, 0, 0, 0, 0.015072491217987276, 0.01334402519313404, 0.009685271239137013], [0, 0, 0, 0, 0.029016828297879688, 0, 0.02556969419524588, 0, 0.0166617112321647, 0], [0, 0, 0.04902462700648653, 0, 0, 0.03673768751153254, 0.028379019828563015, 0, 0.01965919060389447, 0.016549921191581208], [0.1866385672382471, 0, 0, 0.0699953817029928, 0, 0.04870728392348827, 0.03442955279336905, 0.02458861384988584, 0, 0], [0, 0.05879119015529107, 0, 0, 0.029714929876408, 0.02553647446566035, 0.02404391769864712, 0, 0, 0], [0.2057176638682339, 0.09262072457365454, 0, 0.07416412919346561, 0.055879131430934904, 0, 0, 0, 0, 0.022432504987518018], [0.05756103892913699, 0.053452695346524616, 0, 0, 0, 0, 0.036547332566634526, 0.03508232881977189, 0.03443886203459731, 0], [0, 0.04398995900087895, 0, 0, 0, 0.03146579389415872, 0, 0, 0.024538189090342166, 0], [0, 0, 0, 0, 0, 0.02802171034999685, 0, 0.025774784558149084, 0, 0], [0, 0, 0, 0.018571717949851064, 0, 0.012954786521818884, 0, 0.009430528526860176, 0, 0], [0.1454907152348812, 0, 0, 0, 0, 0, 0.03785745980111628, 0, 0, 0.021541800381141295], [0, 0.0426862922893931, 0, 0, 0, 0, 0, 0, 0, 0.011278397264675449], [0, 0.04250444929076922, 0.029164095591145175, 0.023347076272388318, 0, 0.020595167879498753, 0, 0, 0.018154149106714302, 0], [0, 0.0877762514172394, 0, 0.07932378602006801, 0.07625885265753736, 0.07535653953729007, 0.06570178671345389, 0, 0, 0.05937118055846701]];
var importance_politics_neg = [[-0.04315185432407756, -0.041045793879617286, -0.03859290458733168, 0, -0.03094938993278106, 0, -0.021927327300924088, 0, -0.019501474857927317, -0.015279908298332562], [-0.1194660344017302, -0.1190231632025405, 0, 0, -0.08647109478632649, 0, -0.06979009342978759, -0.04647398717998633, 0, 0], [-0.14627983449087378, -0.060792715802591504, 0, 0, -0.05207605026915348, 0, 0, -0.04199325363386633, -0.04080610997970918, 0], [0, 0, 0, -0.02740046805966591, 0, 0, 0, -0.01418447281992101, 0, 0], [0, 0, 0, 0, -0.05915366304613041, -0.05574122990933235, 0, 0, 0, 0], [-0.07692295820731813, -0.02481142445754769, -0.020794597704090895, -0.013044452365845985, -0.012095855015974596, -0.011243283122644379, -0.010633733202288423, -0.010378664775962266, 0, 0], [-0.05609246860413219, -0.05285617237888492, 0, -0.027191126857048362, -0.021010942092220534, -0.020880980295319207, -0.017529459647223508, 0, 0, 0], [-0.05621635241609492, -0.053019666752200864, -0.037530656846094634, -0.03119445786355891, 0, -0.027718427107445324, 0, -0.01786990712194537, 0, -0.016346876103107682], [-0.1320504888470372, -0.0728666842224008, 0, -0.04472696733651903, -0.04189529556872646, 0, 0, -0.022880139255121005, 0, 0], [0, -0.12011855430758511, -0.07277286882807474, 0, -0.06511578841373934, 0, 0, 0, -0.024317696173402462, -0.01646841348613865], [-0.22960939572493957, 0, -0.05328960468507968, -0.04365581843424057, 0, 0, 0, -0.020028782524059124, -0.016959719007696043, -0.016720096667241082], [0, 0, -0.0756939704633743, 0, 0, -0.05274677422718157, -0.038272363073374095, -0.03387293085348274, -0.031275234375337566, 0], [0, 0, -0.04647956387817115, -0.04311766269242395, -0.038684154375947556, -0.03866087826257287, 0, 0, 0, -0.02666433537735053], [-0.07638692725950909, 0, -0.0428884622944607, -0.0369357373374701, -0.034896899203342616, 0, -0.031270968338652755, -0.02453911353002827, 0, -0.023739086652620426], [-0.053082364884085353, -0.0416151238739133, -0.036686554836381995, -0.035578263505813834, -0.029150257970261682, 0, -0.02793808561310909, 0, -0.02491174640215944, -0.0198586791702822], [-0.10681577592288259, -0.043463618000565675, -0.023182682161670735, 0, -0.013607102071173655, 0, -0.010303868564766509, 0, -0.00927018498219298, -0.009124733063409843], [0, -0.09523057719134541, -0.0948140160373338, -0.0893941238844528, -0.053342198584442516, -0.038242197655494053, 0, -0.034873969366501015, -0.02725586612939608, 0], [-0.04315288605643051, 0, -0.03869854846602816, -0.03611800578205066, -0.031178486390031943, -0.018724918307068884, -0.017764512644351135, -0.01639602267898466, -0.01449856330108442, 0], [-0.33083728530844414, 0, 0, 0, -0.020881019123004236, 0, -0.019928340627061628, -0.019044695884700952, 0, -0.011693550168344823], [-0.22169990988473295, 0, -0.08410182774891702, 0, 0, 0, 0, -0.06237075931097433, -0.059482431252496346, 0]];

var importance_tech = [[0.17581275295677393, -0.1565963500879514, 0.09762736761191707, -0.06241953143122083, -0.03899317463626236, -0.03462594602171725, -0.029463757846233934, 0.02776751117561242, 0.020871416294397264, 0.01180865313454435], [0.014428301542285018, -0.00981971356517912, -0.009719383156431612, -0.008807643890890154, -0.007738095735902986, -0.006681078841509616, -0.005275329411129658, 0.005144079854630783, 0.00405363230717702, 0.003923590354378642], [0.0869076933999073, -0.04494792041030056, 0.044464763173699295, 0.021282678324233275, -0.01908514440628881, -0.015766136209447824, -0.01537181732884857, -0.015272104215167904, 0.013911346240790597, 0.010177988143871945], [-0.014129185117459078, -0.0064205997812344555, -0.004606805591562794, 0.0024735714166081884, -0.002227201590207247, 0.0019288395039023505, -0.0017560777606093374, -0.001641301231588255, 0.0015116198047380668, -0.0013406786228457193], [-0.00554102093605935, -0.00506303986671465, -0.00485577799984886, -0.0047722092565541585, 0.0020758010801075148, 0.0020459938177979967, -0.001800267839317577, 0.0016152513145488098, -0.0009570103194549206, -0.0009184661450933767], [-0.0232981022447575, -0.00562268211612577, -0.004172640821686481, 0.003246800358717337, -0.0029660555046184004, -0.0024535968534596894, -0.0023436993767442997, 0.002166793641283654, -0.0019710073109834706, 0.001953330273829742], [-0.00619881078399912, -0.005704340117851413, 0.005363237072365716, -0.004383975964609342, -0.004333974659989764, 0.0032989815529038662, 0.0029272713165394903, 0.0026702614723142456, -0.002249341902563133, -0.002213210683919993], [0.1505244502723254, 0.13077553569299805, 0.06844458640347972, 0.06286332708843628, -0.059551469740803685, -0.04282432304385119, 0.03683035278258448, 0.035058540367699065, -0.027278240385003982, 0.021529011132693277], [-0.024206543132140736, 0.009234344347305959, 0.007405122875944923, -0.007346674932623525, 0.006036183627396113, 0.005292915573628446, 0.005119705049299002, -0.004957016377000301, -0.004025464836506051, -0.003854639431555561], [0.01015848594167731, -0.009333219491014684, -0.008172775954300056, 0.007268837349238709, -0.0069078410707423986, 0.005473146504901559, -0.00544590880823069, 0.004386723633748758, 0.003421779912653227, 0.0019869494617366103], [-0.03240013086634187, 0.012264703663563118, 0.006259869635785103, -0.006039115561557367, 0.005724370662149053, 0.003401499499030254, -0.002811939060141495, -0.0027081537359037117, -0.0023589259710916693, -0.00147611285332328], [-0.00762619113897674, -0.005353665438968524, -0.002537068727701655, 0.002218376922963825, 0.0017473585144206836, -0.001706871009729884, 0.0016588293687790736, -0.0016348933120834777, -0.001546613283341691, 0.0012648781956402337], [-0.006962133416814767, 0.0061144047566513106, 0.005669126781543519, -0.005600583112389641, -0.004640990739638208, 0.004376650522989411, 0.003899980628661641, -0.003862055712465458, -0.0035286995506010775, 0.0024235430967512665], [-0.007861490848477187, 0.005945589056103954, -0.005309817422632879, -0.0038540080219631036, -0.0025605763906849464, 0.0023537355800059756, -0.002310179158294006, -0.0021741059118067394, -0.0020381205751111597, -0.0016355585310913387], [-0.008229449032405438, -0.005858306530795697, -0.005153414380273102, -0.004723585925623947, -0.004477090031232033, 0.004081255502753964, 0.0028135826092886567, -0.0026418092851912263, -0.0024136466674260656, -0.0022719265727838417], [-0.029350901972904485, -0.00520087405463548, 0.005158975169940419, 0.004521487098297719, -0.003877931027583955, -0.002561262535000316, 0.0023765380679928298, -0.0019501384114533828, -0.0017259295446040751, -0.0010566467385300657], [0.21040257835912693, 0.14451671134905605, 0.1393834571280261, 0.079054353406073, -0.050803222542834536, -0.044432766220738884, -0.044260032344122714, 0.027684897139009002, 0.023671254295067584, 0.017109765352244753], [0.07975843033935066, 0.0796438064873296, -0.03604604853841603, -0.02948079457125586, -0.026219986914208016, -0.024016130645291508, -0.023125805669844252, -0.02286639736564363, -0.022393339501237692, 0.020148725066154775], [0.7090464687588077, -0.09687131698339077, -0.049862420677195936, 0.034561291133196684, -0.025534178564331777, -0.01883805240235063, -0.01812479498168374, 0.016759829197332238, -0.016189323987747934, 0.010075728897020507], [0.2395164858874044, -0.042127628166412585, -0.04173296692837451, -0.030730536631420932, 0.02984497979426032, -0.027316485941286477, -0.026869246573313223, -0.026588922208052486, -0.024833706286857247, -0.02475164330150893]];
var importance_tech_pos = [[0.17581275295677393, 0, 0.09762736761191707, 0, 0, 0, 0, 0.02776751117561242, 0.020871416294397264, 0.01180865313454435], [0.014428301542285018, 0, 0, 0, 0, 0, 0, 0.005144079854630783, 0.00405363230717702, 0.003923590354378642], [0.0869076933999073, 0, 0.044464763173699295, 0.021282678324233275, 0, 0, 0, 0, 0.013911346240790597, 0.010177988143871945], [0, 0, 0, 0.0024735714166081884, 0, 0.0019288395039023505, 0, 0, 0.0015116198047380668, 0], [0, 0, 0, 0, 0.0020758010801075148, 0.0020459938177979967, 0, 0.0016152513145488098, 0, 0], [0, 0, 0, 0.003246800358717337, 0, 0, 0, 0.002166793641283654, 0, 0.001953330273829742], [0, 0, 0.005363237072365716, 0, 0, 0.0032989815529038662, 0.0029272713165394903, 0.0026702614723142456, 0, 0], [0.1505244502723254, 0.13077553569299805, 0.06844458640347972, 0.06286332708843628, 0, 0, 0.03683035278258448, 0.035058540367699065, 0, 0.021529011132693277], [0, 0.009234344347305959, 0.007405122875944923, 0, 0.006036183627396113, 0.005292915573628446, 0.005119705049299002, 0, 0, 0], [0.01015848594167731, 0, 0, 0.007268837349238709, 0, 0.005473146504901559, 0, 0.004386723633748758, 0.003421779912653227, 0.0019869494617366103], [0, 0.012264703663563118, 0.006259869635785103, 0, 0.005724370662149053, 0.003401499499030254, 0, 0, 0, 0], [0, 0, 0, 0.002218376922963825, 0.0017473585144206836, 0, 0.0016588293687790736, 0, 0, 0.0012648781956402337], [0, 0.0061144047566513106, 0.005669126781543519, 0, 0, 0.004376650522989411, 0.003899980628661641, 0, 0, 0.0024235430967512665], [0, 0.005945589056103954, 0, 0, 0, 0.0023537355800059756, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0.004081255502753964, 0.0028135826092886567, 0, 0, 0], [0, 0, 0.005158975169940419, 0.004521487098297719, 0, 0, 0.0023765380679928298, 0, 0, 0], [0.21040257835912693, 0.14451671134905605, 0.1393834571280261, 0.079054353406073, 0, 0, 0, 0.027684897139009002, 0.023671254295067584, 0.017109765352244753], [0.07975843033935066, 0.0796438064873296, 0, 0, 0, 0, 0, 0, 0, 0.020148725066154775], [0.7090464687588077, 0, 0, 0.034561291133196684, 0, 0, 0, 0.016759829197332238, 0, 0.010075728897020507], [0.2395164858874044, 0, 0, 0, 0.02984497979426032, 0, 0, 0, 0, 0]];
var importance_tech_neg = [[0, -0.1565963500879514, 0, -0.06241953143122083, -0.03899317463626236, -0.03462594602171725, -0.029463757846233934, 0, 0, 0], [0, -0.00981971356517912, -0.009719383156431612, -0.008807643890890154, -0.007738095735902986, -0.006681078841509616, -0.005275329411129658, 0, 0, 0], [0, -0.04494792041030056, 0, 0, -0.01908514440628881, -0.015766136209447824, -0.01537181732884857, -0.015272104215167904, 0, 0], [-0.014129185117459078, -0.0064205997812344555, -0.004606805591562794, 0, -0.002227201590207247, 0, -0.0017560777606093374, -0.001641301231588255, 0, -0.0013406786228457193], [-0.00554102093605935, -0.00506303986671465, -0.00485577799984886, -0.0047722092565541585, 0, 0, -0.001800267839317577, 0, -0.0009570103194549206, -0.0009184661450933767], [-0.0232981022447575, -0.00562268211612577, -0.004172640821686481, 0, -0.0029660555046184004, -0.0024535968534596894, -0.0023436993767442997, 0, -0.0019710073109834706, 0], [-0.00619881078399912, -0.005704340117851413, 0, -0.004383975964609342, -0.004333974659989764, 0, 0, 0, -0.002249341902563133, -0.002213210683919993], [0, 0, 0, 0, -0.059551469740803685, -0.04282432304385119, 0, 0, -0.027278240385003982, 0], [-0.024206543132140736, 0, 0, -0.007346674932623525, 0, 0, 0, -0.004957016377000301, -0.004025464836506051, -0.003854639431555561], [0, -0.009333219491014684, -0.008172775954300056, 0, -0.0069078410707423986, 0, -0.00544590880823069, 0, 0, 0], [-0.03240013086634187, 0, 0, -0.006039115561557367, 0, 0, -0.002811939060141495, -0.0027081537359037117, -0.0023589259710916693, -0.00147611285332328], [-0.00762619113897674, -0.005353665438968524, -0.002537068727701655, 0, 0, -0.001706871009729884, 0, -0.0016348933120834777, -0.001546613283341691, 0], [-0.006962133416814767, 0, 0, -0.005600583112389641, -0.004640990739638208, 0, 0, -0.003862055712465458, -0.0035286995506010775, 0], [-0.007861490848477187, 0, -0.005309817422632879, -0.0038540080219631036, -0.0025605763906849464, 0, -0.002310179158294006, -0.0021741059118067394, -0.0020381205751111597, -0.0016355585310913387], [-0.008229449032405438, -0.005858306530795697, -0.005153414380273102, -0.004723585925623947, -0.004477090031232033, 0, 0, -0.0026418092851912263, -0.0024136466674260656, -0.0022719265727838417], [-0.029350901972904485, -0.00520087405463548, 0, 0, -0.003877931027583955, -0.002561262535000316, 0, -0.0019501384114533828, -0.0017259295446040751, -0.0010566467385300657], [0, 0, 0, 0, -0.050803222542834536, -0.044432766220738884, -0.044260032344122714, 0, 0, 0], [0, 0, -0.03604604853841603, -0.02948079457125586, -0.026219986914208016, -0.024016130645291508, -0.023125805669844252, -0.02286639736564363, -0.022393339501237692, 0], [0, -0.09687131698339077, -0.049862420677195936, 0, -0.025534178564331777, -0.01883805240235063, -0.01812479498168374, 0, -0.016189323987747934, 0], [0, -0.042127628166412585, -0.04173296692837451, -0.030730536631420932, 0, -0.027316485941286477, -0.026869246573313223, -0.026588922208052486, -0.024833706286857247, -0.02475164330150893]];


categories1 = ['A','B','C','D','E','F','G','H','I','J'];
categories2 = ['A','B','C','D','E','F','G','H','I','J'];
categories3 = ['A','B','C','D','E','F','G','H','I','J'];
categories4 = ['A','B','C','D','E','F','G','H','I','J'];
categories5 = ['A','B','C','D','E','F','G','H','I','J'];


var tutorial_categories1 = [
	'medical', 'offers', 'Professional', 'online', 'for', 'such', 'Why', 'Twitter', 'voice', 'ways'
	];
		
const chart1 = Highcharts.chart('explanation1', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories1,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},

	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},

	series: [{
		name: 'Evidence against BUSINESS',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#5F9EA0",
	}, {
		name: 'Evidence for BUSINESS',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#1F77B4",
	}]
});


var tutorial_categories2 = [
	'Why', 'Should', 'to', 'for', 'information', 'patients', 'use', 'online', 'Twitter', 'Young'
	];
		
const chart2 = Highcharts.chart('explanation2', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'Evidence for ENTERTAINMENT',
		data: [
			 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFCB9D"
	}]
});

var tutorial_categories3 = [
	'medical', 'Twitter', 'patients', 'online', 'such', 'yourself', 'and', 'Physician', 'ways', 'Why'
	];
		
const chart3 = Highcharts.chart('explanation3', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories3,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against HEALTHY LIVING',
		data: [
			0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
		],
		color:"#7AAEB0"
	}, {
		name: 'Evidence for HEALTHY LIVING',
		data: [
			0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
		],
		color:"#2CA02C"
	}]
});


var tutorial_categories4 = [
	'online', 'professional', 'patients', 'yourself', 'opinions', 'and', 'would', 'Why', 'offers', 'increasingly'
	];
		
const chart4 = Highcharts.chart('explanation4', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories4,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against POLITICS',
		data: [
			-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
		],
		color:"#5F9EA0"
	}, {
		name: 'Evidence for POLITICS',
		data: [
			0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
		],
		color:"#D10A0F"
	}]
});


var tutorial_categories5 = [
	'Twitter', 'and', 'medical', 'online', 'Why', 'be', 'offers', 'information', 'providers', 'use'
	];
		
const chart5 = Highcharts.chart('explanation5', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories5,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against TECHNOLOGY',
		data: [
			  0, -0.0439857007516732, -0.03872042257826044, 0, -0.028222141594886927, -0.024543454122409, -0.02348784755752732, 0, 0, 0
		],
		color:"#DEEBEB"
	}, {
		name: 'Evidence for TECHNOLOGY',
		data: [
			0.1362141284382676, 0, 0, 0.03344750475770304, 0, 0, 0, 0.013443664876114599, 0.010709410917512669, 0.00974989891968158
		],
		color:"#9467BD"
	}]
});


const chart_business = Highcharts.chart('chart_business', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories1,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against BUSINESS',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#5F9EA0"
	}, {
		name: 'Evidence for BUSINESS',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#1F77B4"
	}]
});




const chart_entertainment = Highcharts.chart('chart_entertainment', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'Evidence for ENTERTAINMENT',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFCB9D"
	}]
});


const chart_health = Highcharts.chart('chart_health', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories3,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against HEALTHY LIVING',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#7AAEB0"
	}, {
		name: 'Evidence for HEALTHY LIVING',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#2CA02C"
	}]
});


const chart_politics = Highcharts.chart('chart_politics', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories4,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against POLITICS',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'Evidence for POLITICS',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#D10A0F"
	}]
});


const chart_technology = Highcharts.chart('chart_technology', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories5,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
		formatter: function () {
			return Math.abs(this.value);
		}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '28px'
		  }
	},
	series: [{
		name: 'Evidence against TECHNOLOGY',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#DEEBEB"
	}, {
		name: 'Evidence for TECHNOLOGY',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#9467BD"
	}]
});



var human_attention_original = null;


var AIRoles_index = 0;


var task_num = 20;



const order_list = [];
for(var i = 0;i < task_num;i++){
	order_list.push(i);
}

for (let i = 1; i < order_list.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
}




var user_id = 0;

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});
}
var user_id = uuidv4();


var ground_truth_1 = null;
var firstdecision_1 = null;
var firstconfidence_1 = null;
var aisuggestion_1 = null;
var aiconfidence_1 = null;
var seconddecision_1 = null;
var secondconfidence_1 = null;

var reason_1 = null;
var reason_2 = null;

var first_feature = null;
var second_feature = null;

var firstdecision_2 = null;
var firstconfidence_2 = null;
var aisuggestion_2 = null;
var aiconfidence_2 = null;
var seconddecision_2 = null;
var secondconfidence_2 = null;


var firstdecision_3 = null;
var firstconfidence_3 = null;
var aisuggestion_3 = null;
var aiconfidence_3 = null;
var seconddecision_3 = null;
var secondconfidence_3 = null;

var current_ground_truth = null;

var current_idx = 0;
var current_idx_training = 0;

var current_instance_data = null;



var all_data_tosave = [];
var all_data_tosave_training = [];


var ai_suggestion_seen = false;

var timestamp1 = null;
var timestamp2 = null;


var interaction_log_in_this_button = null;
var user_interaction_log_thispape = [];
var user_interaction_log = [];

var questionnaire_data = null;

var case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var correct_case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var prolific_id = 'prolific_id';

var attention_check_useranswer = [];






/*
用户交互日志记录
*/

//用户进入consent form的时间
$("#go_to_consentform").click(function(){
	var what_clicked = "go_to_consentform";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户正式开始实验的时间
$("#start_actual_tasks").click(function(){
	var what_clicked = "start_actual_tasks";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户做完初始判断，查看AI的建议
$("#see_ai_suggestion").click(function(){
	var what_clicked = "see_ai_suggestion";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//进入下一个task的按钮
$("#next-task-btn").click(function(){
	var what_clicked = "next-task-btn";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//开始填写questionnaire的时间
$("#go_to_questionnaire").click(function(){
	var what_clicked = "go_to_questionnaire";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//填写完questionnaire的时间
$("#go_to_next").click(function(){
	var what_clicked = "go_to_next";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});





















$("#go_to_consentform").click(function(){

	var percentage = parseInt(11/order_list.length*100);
	//console.log(percentage);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

	prolific_id = userinfo[0].value;


    $(".nav-tabs a[href='#consent_form']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


});


$("#accept_button").click(function(){

    $(".nav-tabs a[href='#tutorial']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});
$("#reject_button").click(function(){

    $("#quitModal").modal('show');

});



$("#start_actual_tasks").click(function(){

	// 先进行attention check
	if((document.getElementById('attention_question_1-1').checked == false && document.getElementById('attention_question_1-2').checked == false && document.getElementById('attention_question_1-3').checked == false && document.getElementById('attention_question_1-4').checked == false) 
	|| (document.getElementById('attention_question_2-1').checked == false && document.getElementById('attention_question_2-2').checked == false && document.getElementById('attention_question_2-3').checked == false && document.getElementById('attention_question_2-4').checked == false)){
		alert("Please answer the above question");
		return false;
	}else{

		timestamp1 = new Date().getTime(); //1610075969354 


		var attentionData1 = $("#firstcheck").serializeArray();
        var attentionData2 = $("#secondcheck").serializeArray();
        
        
        attention_check_useranswer.push([attentionData1[0].value, attentionData2[0].value]);
	
		$(".nav-tabs a[href='#NLP_task']").tab('show');
		$("html, body").animate({ scrollTop: 0 }, "slow");

		document.getElementById("category-text-content").innerHTML = text_content[order_list[AIRoles_index]];
			
	}
});


$("#next-task-btn").click(function(){
	// alert(AIRoles_index);
	var objData1 = $("#finaldecision1").serializeArray();

	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false && document.getElementById('radio-final-decision-3').checked == false
	&& document.getElementById('radio-final-decision-4').checked == false && document.getElementById('radio-final-decision-5').checked == false){
		alert("Please make your final prediction");
		return false;
	}
	if(document.getElementById('radio-final-confidence-1').checked == false && document.getElementById('radio-final-confidence-2').checked == false && document.getElementById('radio-final-confidence-3').checked == false
	&& document.getElementById('radio-final-confidence-4').checked == false && document.getElementById('radio-final-confidence-5').checked == false){
		alert("Please indicate your confidence in your final prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true || document.getElementById('radio-final-decision-3').checked == true
	|| document.getElementById('radio-final-decision-4').checked == true || document.getElementById('radio-final-decision-5').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || 
	document.getElementById('radio-final-confidence-2').checked == true || document.getElementById('radio-final-confidence-3').checked == true
	|| document.getElementById('radio-final-confidence-4').checked == true || document.getElementById('radio-final-confidence-5').checked == true)) {
		seconddecision_1 = objData1[0];
		secondconfidence_1 = objData1[1];

		// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
		user_interaction_log.push([AIRoles_index, user_interaction_log_thispape]);

		ground_truth_1 = ground_truth_AIRoles[order_list[AIRoles_index]];


		timestamp2 = new Date().getTime(); //1610075969354 

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		current_instance_data = [AIRoles_index, order_list[AIRoles_index], firstdecision_1, seconddecision_1, secondconfidence_1, ground_truth_1, time_spent];

		console.log(current_instance_data);

		all_data_tosave.push(current_instance_data);



		if(AIRoles_index < 19){

			AIRoles_index++;

			$(".nav-tabs a[href='#NLP_task']").tab('show');
			document.getElementById("next-task-btn").style.display="none";
			document.getElementById("category-text-content").innerHTML=text_content[order_list[AIRoles_index]];
			document.getElementById('the-index').textContent = AIRoles_index + 1 + '/' + order_list.length;
			// alert(AIRoles_index);

			// 把选项框清零

			document.getElementById('radio-final-decision-1').checked = false;
			document.getElementById('radio-final-decision-2').checked = false;
			document.getElementById('radio-final-decision-3').checked = false;
			document.getElementById('radio-final-decision-4').checked = false;
			document.getElementById('radio-final-decision-5').checked = false;

			document.getElementById('radio-final-confidence-1').checked = false;
			document.getElementById('radio-final-confidence-2').checked = false;
			document.getElementById('radio-final-confidence-3').checked = false;
			document.getElementById('radio-final-confidence-4').checked = false;
			document.getElementById('radio-final-confidence-5').checked = false;


			// 对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = AIRoles_index/order_list.length*100;
			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';

		}
		else{
			// 把选项框清零

			document.getElementById('radio-final-decision-1').checked = false;
			document.getElementById('radio-final-decision-2').checked = false;
			document.getElementById('radio-final-decision-3').checked = false;
			document.getElementById('radio-final-decision-4').checked = false;
			document.getElementById('radio-final-decision-5').checked = false;

			document.getElementById('radio-final-confidence-1').checked = false;
			document.getElementById('radio-final-confidence-2').checked = false;
			document.getElementById('radio-final-confidence-3').checked = false;
			document.getElementById('radio-final-confidence-4').checked = false;
			document.getElementById('radio-final-confidence-5').checked = false;


			// 对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = (AIRoles_index+1)/order_list.length*100;
			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';


			document.getElementById("go_to_questionnaire").style.display = "block";
			document.getElementById("next-task-btn").style.display="none";
			document.getElementById("AI_suggestion1").style.display="none";
		}


		// 对每个选项卡，恢复“可点击”状态，以及将下面的区域都隐藏
		document.getElementById("tab1").style.pointerEvents = "auto";
		document.getElementById("tab2").style.pointerEvents = "auto";
		document.getElementById("tab3").style.pointerEvents = "auto";
		document.getElementById("tab4").style.pointerEvents = "auto";
		document.getElementById("tab5").style.pointerEvents = "auto";

		document.getElementById("highlight_1").style.display = "none";
		document.getElementById("highlight_2").style.display = "none";
		document.getElementById("highlight_3").style.display = "none";
		document.getElementById("highlight_4").style.display = "none";
		document.getElementById("highlight_5").style.display = "none";

		document.getElementById("tab1").className = "";
		document.getElementById("tab2").className = "";
		document.getElementById("tab3").className = "";
		document.getElementById("tab4").className = "";
		document.getElementById("tab5").className = "";
		

		// 默认是展示AI的建议的
		document.getElementById("show_ai_suggestion").style.display = "block";

		// document.getElementById("tab1").style.color = "#000000";
		// document.getElementById("tab2").style.color = "#000000";
		// document.getElementById("tab3").style.color = "#000000";
		// document.getElementById("tab4").style.color = "#000000";
		// document.getElementById("tab5").style.color = "#000000";


		// background-color: #585858;
		// color: white;

		//清除当前页的log
		user_interaction_log_thispape = [];


	}
});



function changeBackg(thetext, feature_list, color_list){
	var result;
	result = thetext;
	var newword;
	for(var i = 0; i < feature_list.length; i++){
		newword = '<font style=\"background: '+color_list[i]+'\">'+feature_list[i]+'</font>';
		var toreplace = new RegExp('\\b' + feature_list[i]+ '\\b', "gi");
		console.log(toreplace)
		result = result.replace(toreplace, newword);
	}
	return result;
}


function getColorList(grdtru, importance_list){
	var maxpos = Math.max.apply(null,importance_list);
	var minneg = Math.min.apply(null,importance_list);
	var color_list = []
	if(grdtru == 0){
		// business
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#75b6ae');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e2edeb');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#B8D4E7');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#A8CAE2');
			else
				color_list.push('#88B6D7');
		}
	}
	else if(grdtru == 1){
		//entertainment
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#A7C9CA');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#daebe5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#f7e2cf');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#fed1a9');
			else
				color_list.push('#f1c095');
		}
	}
	else if(grdtru == 2){
		//healthy
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#E3F2E3');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#B1DCB1');
			else
				color_list.push('#2CA02C');
		}
	}
	else if(grdtru == 3){
		//politics
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#eac4c4');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#e69898');
			else
				color_list.push('#E57777');
		}
	}
	else{
		//tech
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#a9dbdb');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#CCE0E0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e0eaea');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#F5F0F9');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#E5D9EF');
			else
				color_list.push('#9467BD');
		}
	}
	return color_list;
}



function updateCharts(){
	categories1 = features_business[order_list[AIRoles_index]];
	chart_business.update({
		xAxis: {
			categories: categories1,
		}, 
		series: [{
			data: importance_business_neg[order_list[AIRoles_index]],
		}, {
			data: importance_business_pos[order_list[AIRoles_index]],
		}]
	});


	categories2 = features_entertainment[order_list[AIRoles_index]];
	chart_entertainment.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg[order_list[AIRoles_index]],
		}, {
			data: importance_entertainment_pos[order_list[AIRoles_index]],
		}]
	});
	
	categories3 = features_healthy[order_list[AIRoles_index]];
	chart_health.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg[order_list[AIRoles_index]],
		}, {
			data: importance_healthy_pos[order_list[AIRoles_index]],
		}]
	});
	

	categories4 = features_politics[order_list[AIRoles_index]];
	chart_politics.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[order_list[AIRoles_index]],
		}, {
			data: importance_politics_pos[order_list[AIRoles_index]],
		}]
	});
	

	categories5 = features_tech[order_list[AIRoles_index]];
	chart_technology.update({
		xAxis: {
			categories: categories5,
		}, 
		series: [{
			data: importance_tech_neg[order_list[AIRoles_index]],
		}, {
			data: importance_tech_pos[order_list[AIRoles_index]],
		}]
	});

}



$("#see_ai_suggestion").click(function(){


	var objData1 = $("#firstdecision1").serializeArray();

	//console.log(objData1);

	
	//console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false && document.getElementById('radio-first-decision-3').checked == false
	&& document.getElementById('radio-first-decision-4').checked == false && document.getElementById('radio-first-decision-5').checked == false){
		alert("Please make your prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if (document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true || document.getElementById('radio-first-decision-3').checked == true
	|| document.getElementById('radio-first-decision-4').checked == true || document.getElementById('radio-first-decision-5').checked == true) {
		firstdecision_1 = objData1[0];

		human_pred = firstdecision_1['value'];
		console.log(human_pred);  

		// 取5个output中第一位（最大概率）作为AI的预测
		ai_pred = ai_prediction[order_list[AIRoles_index]][0];

		console.log('ai_pred',ai_pred);
		console.log('human_pred',human_pred);
		console.log(order_list[AIRoles_index])
		updateCharts();
		document.getElementById("next-task-btn").style.display="block";	

		console.log(text_content[order_list[AIRoles_index]])

		document.getElementById("suggestion1-text-BUSINESS").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-HEALTHY").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-POLITICS").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML=text_content[order_list[AIRoles_index]];


		
		context_before_replace = document.getElementById("suggestion1-text-BUSINESS").innerHTML;


		/*
		//如果AI和人的看法不同，直接呈现AI的建议以及对应的解释，去challenge人
		*/
		if (ai_pred != human_pred){

		
			if(ai_pred == 0){
				var feature_list = features_business[order_list[AIRoles_index]];
				var importance_list = importance_business[order_list[AIRoles_index]];
				var color_list = getColorList(0, importance_list)
				document.getElementById("suggestion1-text-BUSINESS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);


				document.getElementById("tab2").style.pointerEvents = "none";
				document.getElementById("tab3").style.pointerEvents = "none";
				document.getElementById("tab4").style.pointerEvents = "none";
				document.getElementById("tab5").style.pointerEvents = "none";

				// document.getElementById("tab2").style.color = "#e6dede";
				// document.getElementById("tab3").style.color = "#e6dede";
				// document.getElementById("tab4").style.color = "#e6dede";
				// document.getElementById("tab5").style.color = "#e6dede";

				document.getElementById("tab2").className = "";
				document.getElementById("tab3").className = "";
				document.getElementById("tab4").className = "";
				document.getElementById("tab5").className = "";


				document.getElementById("highlight_2").style.display = "none";
				document.getElementById("highlight_3").style.display = "none";
				document.getElementById("highlight_4").style.display = "none";
				document.getElementById("highlight_5").style.display = "none";

				// document.getElementById("tab1").style.color = "#FFFFFF";
				document.getElementById("tab1").className = "active";
				document.getElementById("highlight_1").style.display = "block";


				document.getElementById("ai_sug_region").innerHTML = "AI disagrees with you. AI's suggestion: BUSINESS";
			}
			else if(ai_pred == 1){
				feature_list = features_entertainment[order_list[AIRoles_index]];
				importance_list = importance_entertainment[order_list[AIRoles_index]];
				color_list = getColorList(1, importance_list)
				document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
				document.getElementById("tab1").style.pointerEvents = "none";
				document.getElementById("tab3").style.pointerEvents = "none";
				document.getElementById("tab4").style.pointerEvents = "none";
				document.getElementById("tab5").style.pointerEvents = "none";

				// document.getElementById("tab1").style.color = "#e6dede";
				// document.getElementById("tab3").style.color = "#e6dede";
				// document.getElementById("tab4").style.color = "#e6dede";
				// document.getElementById("tab5").style.color = "#e6dede";

				document.getElementById("tab1").className = "";
				document.getElementById("tab3").className = "";
				document.getElementById("tab4").className = "";
				document.getElementById("tab5").className = "";

				document.getElementById("highlight_1").style.display = "none";
				document.getElementById("highlight_3").style.display = "none";
				document.getElementById("highlight_4").style.display = "none";
				document.getElementById("highlight_5").style.display = "none";

				// document.getElementById("tab2").style.color = "#FFFFFF";
				document.getElementById("tab2").className = "active";
				document.getElementById("highlight_2").style.display = "block";


				document.getElementById("ai_sug_region").innerHTML = "AI disagrees with you. AI's suggestion: ENTERTAINMENT";
			}
			else if(ai_pred == 2){
				feature_list = features_healthy[order_list[AIRoles_index]];
				importance_list = importance_healthy[order_list[AIRoles_index]];
				color_list = getColorList(2, importance_list)
				document.getElementById("suggestion1-text-HEALTHY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);


				document.getElementById("tab1").style.pointerEvents = "none";
				document.getElementById("tab2").style.pointerEvents = "none";
				document.getElementById("tab4").style.pointerEvents = "none";
				document.getElementById("tab5").style.pointerEvents = "none";

				// document.getElementById("tab1").style.color = "#e6dede";
				// document.getElementById("tab2").style.color = "#e6dede";
				// document.getElementById("tab4").style.color = "#e6dede";
				// document.getElementById("tab5").style.color = "#e6dede";

				document.getElementById("tab1").className = "";
				document.getElementById("tab2").className = "";
				document.getElementById("tab4").className = "";
				document.getElementById("tab5").className = "";

				document.getElementById("highlight_1").style.display = "none";
				document.getElementById("highlight_2").style.display = "none";
				document.getElementById("highlight_4").style.display = "none";
				document.getElementById("highlight_5").style.display = "none";

				// document.getElementById("tab3").style.color = "#FFFFFF";
				document.getElementById("tab3").className = "active";
				document.getElementById("highlight_3").style.display = "block";


				document.getElementById("ai_sug_region").innerHTML = "AI disagrees with you. AI's suggestion: HEALTHY LIVING";
			}
			else if(ai_pred == 3){
				feature_list = features_politics[order_list[AIRoles_index]];
				importance_list = importance_politics[order_list[AIRoles_index]];
				color_list = getColorList(3, importance_list)
				document.getElementById("suggestion1-text-POLITICS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
				document.getElementById("tab1").style.pointerEvents = "none";
				document.getElementById("tab2").style.pointerEvents = "none";
				document.getElementById("tab3").style.pointerEvents = "none";
				document.getElementById("tab5").style.pointerEvents = "none";

				// document.getElementById("tab1").style.color = "#e6dede";
				// document.getElementById("tab2").style.color = "#e6dede";
				// document.getElementById("tab3").style.color = "#e6dede";
				// document.getElementById("tab5").style.color = "#e6dede";

				
				document.getElementById("tab1").className = "";
				document.getElementById("tab2").className = "";
				document.getElementById("tab3").className = "";
				document.getElementById("tab5").className = "";

				document.getElementById("highlight_1").style.display = "none";
				document.getElementById("highlight_2").style.display = "none";
				document.getElementById("highlight_3").style.display = "none";
				document.getElementById("highlight_5").style.display = "none";

				// document.getElementById("tab4").style.color = "#FFFFFF";
				document.getElementById("tab4").className = "active";
				document.getElementById("highlight_4").style.display = "block";


				document.getElementById("ai_sug_region").innerHTML = "AI disagrees with you. AI's suggestion: POLITICS";
			}
			else if(ai_pred == 4){
				feature_list = features_tech[order_list[AIRoles_index]];
				importance_list = importance_tech[order_list[AIRoles_index]];
				color_list = getColorList(4, importance_list)
				document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
				document.getElementById("tab1").style.pointerEvents = "none";
				document.getElementById("tab2").style.pointerEvents = "none";
				document.getElementById("tab3").style.pointerEvents = "none";
				document.getElementById("tab4").style.pointerEvents = "none";

				// document.getElementById("tab1").style.color = "#e6dede";
				// document.getElementById("tab2").style.color = "#e6dede";
				// document.getElementById("tab3").style.color = "#e6dede";
				// document.getElementById("tab4").style.color = "#e6dede";


				document.getElementById("tab1").className = "";
				document.getElementById("tab2").className = "";
				document.getElementById("tab3").className = "";
				document.getElementById("tab4").className = "";

				document.getElementById("highlight_1").style.display = "none";
				document.getElementById("highlight_2").style.display = "none";
				document.getElementById("highlight_3").style.display = "none";
				document.getElementById("highlight_4").style.display = "none";

				// document.getElementById("tab5").style.color = "#FFFFFF";
				document.getElementById("tab5").className = "active";
				document.getElementById("highlight_5").style.display = "block";


				document.getElementById("ai_sug_region").innerHTML = "AI disagrees with you. AI's suggestion: TECHNOLOGY";
			}
		}

		/*
		//如果AI和人的看法一致，不要呈现AI的建议，而是帮助人们探索其他可能的答案
		*/
		if (ai_pred == human_pred){
			var feature_list = features_business[order_list[AIRoles_index]];
			var importance_list = importance_business[order_list[AIRoles_index]];
			var color_list = getColorList(0, importance_list)
			document.getElementById("suggestion1-text-BUSINESS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
	
			feature_list = features_entertainment[order_list[AIRoles_index]];
			importance_list = importance_entertainment[order_list[AIRoles_index]];
			color_list = getColorList(1, importance_list)
			document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
	
			feature_list = features_healthy[order_list[AIRoles_index]];
			importance_list = importance_healthy[order_list[AIRoles_index]];
			color_list = getColorList(2, importance_list)
			document.getElementById("suggestion1-text-HEALTHY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
			
			feature_list = features_politics[order_list[AIRoles_index]];
			importance_list = importance_politics[order_list[AIRoles_index]];
			color_list = getColorList(3, importance_list)
			document.getElementById("suggestion1-text-POLITICS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
	
			feature_list = features_tech[order_list[AIRoles_index]];
			importance_list = importance_tech[order_list[AIRoles_index]];
			color_list = getColorList(4, importance_list)
			document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

			// 初始化展示第一个option的解释
			document.getElementById("tab1").className = "active";
			document.getElementById("highlight_1").style.display = "block";


			// document.getElementById("show_ai_suggestion").style.display = "none";
			document.getElementById("ai_sug_region").innerHTML = "I think you should also consider other options";
			
		}


		$(".nav-tabs a[href='#AI_suggestion1']").tab('show');
		$("html, body").animate({ scrollTop: 0 }, "slow");


		// 把选项框清零

		document.getElementById('radio-first-decision-1').checked = false;
		document.getElementById('radio-first-decision-2').checked = false;
		document.getElementById('radio-first-decision-3').checked = false;
		document.getElementById('radio-first-decision-4').checked = false;
		document.getElementById('radio-first-decision-5').checked = false;

	}

});







$("#go_to_questionnaire").click(function(){
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("go_to_next").style.display = "block";
});


var attention_tocheck = false;





$("#go_to_next").click(function(){

	var objData = $("#post-task-questionnaire").serializeArray();
	console.log(objData);

	document.getElementById("go_to_questionnaire").style.display="none";

	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		questionnaire_data = objData;
	}

	
	document.getElementById("question_area").style.display = "none";


	$("#finishModal").modal('show');
	submitData_ms();


});


$("#exit_button").click(function(){
	document.getElementById("go_to_next").textContent = "Finished";
	document.getElementById("go_to_next").disabled = true;
});


//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 16) {
		alert("Please answer all questions before finishing the experiment");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			// alert("Please answer question: " + objData[i].name);
			alert("Please answer all questions before finishing the experiment");
			return false;
		}
	}
	return true;
}




function submitData_ms(){

	/*
	* 把数据上传到server
	*/

	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	// var url = "https://shuaima.info/userstudy/submit.php"

	// var url = "https://shuaima.top/userstudy/submit.php";
	// var url = "http://49.232.60.34/userstudy/submit.php";

	var url = "http://49.232.60.34/userstudy/submit_prolific.php";

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
			console.log(xhr.responseText);
			//alert("Your response has been saved successfully!");
			$("#finishModal").modal('show');
	    }
	};

	//CFG6PO0K

	var userinfo_alldata = {
		"uid": user_id,

		"condition": 'Devil',

		"prolific_id": prolific_id,

		"user_info": userinfo,

		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"simple_attention_check": attention_check_useranswer,
	}
	
	var dataJson = JSON.stringify(userinfo_alldata);
	// xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    saveAs(blob, user_id + ".json");
}


//must input personal info
function checkFormInfo(objData) {
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == "") {
			alert("Please input value: " + objData[i].name);
			return false;
		}
	}
	return true;
}




let nav = document.querySelectorAll(".nav>div");
let item = document.querySelectorAll(".item>div");

for (let i = 0; i < nav.length; i++) {
  nav[i].index = i;
  nav[i].onclick = function () {
	for (var j = 0; j < item.length; j++) {
	  nav[j].className = "";
	  item[j].style.display = "none";
	}
	this.className = "active";
	console.log(nav[i].index, 'index')
	item[nav[i].index].style.display = "block";
  };
}