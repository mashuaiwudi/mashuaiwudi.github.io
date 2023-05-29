var text_content =  ['Fighting Against the $15 Minimum Wage <br> New Yorkers are fighting for higher wages, with increasing intensity over the past several months. In early April, between 10,000 and 15,000 laborers and students marched on New York. The genesis of the protest seems to be from the fast food industry as well as activist students.', 
"The Wal-Martyrs of Mexican Bribery <br> At the conclusion of its lengthy expose of Wal-Mart's bribery campaign in Mexico, the New York Times narrated the story of Emmanuel D'Herrera Arizcorreta, who died in prison as a result of his battles against Wal-Mart. But fellow activists charge that Wal-Mart is responsible for his death.", 
'Why Are You Still Unemployed? <br> It is both unfair and inaccurate to place all of the blame for unemployment solely on job seekers. Employers are less than perfect, too. In the current job market, technology has changed many of the "standard" practices. So it\'s a new ball game for both employers and job seekers.', 
"Women in Business: Kate O'Brien Minson, President and Co-Founder, Integrated Listening Systems <br> Kate has lived and breathed the therapeutic application of sound for nearly two decades.  She has managed numerous centers over the years, trained thousands of therapists on the application of listening therapy, developed guidelines and protocols for listening equipment, and in the process developed a rare level of experience in clinic management.", 
'The Double and the Christmas Holidays <br> The story of The Double is a parable of how people can get caught up in the hamster wheel of modern existence -- cowed by authority, hierarchy, and external standards of worth into trying to please everyone around them, while not pleasing the most important person they have to live with: themselves.', 
'Weekend Box Office (04/29/12): Think Like a Man Tops Again and The Avengers Rakes In $178 Million Overseas <br> In the weekend before the official start of the summer season, four new releases all debuted to numbers ranging from not awful to genuinely awful. The top film this weekend was once again Think Like a Man -- the ensemble romantic comedy has now earned $60 million', 
"F. Scott Fitzgerald and Hollywood: Writing for the Movies, 1937-1940 <br> Not surprisingly, films have been made of Fitzgerald's own books and short stories from the early 1920s to today. However, the earlier movies have all failed, and for the same reason. Fitzgerald's so hard to film because his words already have done all the cinematic work.", 
"There Is No Theatre Without the Writers <br> It was particularly disheartening to witness the absence of Jeanine Tesori and Lisa Kron as the historically significant first all-female team to break through and write the Tony winner for Best Musical: the adventuresome, dazzling Fun Home, based on Allison Bechtel's book based on her life.", 
'7 Ways To Make Cardio More Fun <br> If you are barely breaking a sweat anymore and feel like you are simply going through the motions with your routine -- kick it up a notch! Playing with the inclines and speed will take your mind off of counting down the minutes that pass. It will also make the workout more of a challenge, meaning more calories burned even faster!', 
"Breast Cancer Awareness Month Needs a Makeover: Advocating for Blue Awareness in a Sea of Pink <br> Let's advocate for together for the men in our lives to begin to turn around the deadly consequences of the lack of awareness of breast cancer among men, the medical professional and the society as a whole.", 
"5 Tips To Cure The Blues And Feel Happy Again <br> So you're cranky. You don't know why exactly, but you're running on a short fuse. We all have those days -- days when we're worried, stressed out or angry. I definitely know those days! The below five steps are methods I've used get out of a funk, and they may help you as well.", 
'The Wisdom of Hawkeye Pierce: Setting the Right Work Climate Brings Out the Best in People. <br> The surgeons of the 4077th MASH unit may have been fictional, but they got one thing right: Creating a positive climate in the operating room can put everyone at ease, allowing doctors and nurses to perform at their best.', 
"Manufacturing and Infrastructure: Not Just About Economics -- Our Own Security Depends on It <br> A national movement is needed, as it will be America's manufacturers that will produce the chemicals, vehicles, protective gear, weapons, measuring devices, medicines and countless other products that will be used to prevent catastrophic events from becoming cataclysmic ones.", 
'Keeping Ourselves Honest In The Aftermath Of The Charleston Massacre <br> As a white, nearly lifelong resident of Charleston, I feel obligated to say in defiance of my usual self-censorship. While they may and often do dwell together, hatred and mental illness are not the same. Hatred is not a mood disorder. Hatred is inert violence. And we are all susceptible to its intrusions.', 
'Welcome to the Party Where Science and History Are Dangerous. <br> What inappropriate and scandalous remarks have prompted such outrage this time? Nothing less than a recitation of facts and history. Why, the gall of this president to confuse these poor, hapless souls with intellectual discourse that would require critical evaluation.', 
'President Obama Is Right to Block the Genocidal ISIS and Hold the Kurdish Defense Line <br> CREDO commends President Obama for responding to a clear humanitarian crisis with emergency supplies. More is needed, the U.S. need not continue alone, but starting quickly while refugees are literally dying on the mountain is the right thing to do now.', 
'The Smartphone Physical: Checkup of the Future? <br> Imagine a comprehensive checkup using only smartphone-based devices. The data is immediately readable and fully uploadable to an electronic health record. The patient understands -- and even participates -- in the interaction far beyond faking a cough and gulping a deep breath. For real?', 
"Technical Literacy: Can Everyone Learn to Code? <br> I believe everyone should learn to code. The skill of coding is no different from the skill of reading and writing English or any human language. I hold myself up as an example: if an art major can learn to code and find success in technology land, why can't everyone do it?", 
"Renting, Buying, and Stealing: The Future of Software Applications <br> It's never been harder, or easier, for a developer of software applications to make an honest living. And it's never been more confusing, or simpler, for consumers to figure out how to get access to cool new tools and critical old ones for their computers, phones, and pads.", 
"'The Mobile' Is Reliably Unreliable <br> A smarter set of technologies is what we need for the mobile. During periods of high speed and high quality bandwidth, mobile apps should anticipate what we're going to read or watch and cache it for later. Don't make us have to remember to pre-download or prepare for being offline."
]


var ground_truth_AIRoles =  [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];


var ai_prediction = [[0, 3, 4, 2, 1], [0, 3, 4, 2, 1], [0, 3, 4, 2, 1], [0, 2, 4, 3, 1], [3, 1, 0, 2, 4], [1, 3, 0, 4, 2], [1, 3, 0, 4, 2], [1, 3, 0, 2, 4], [2, 0, 1, 4, 3], [2, 0, 1, 3, 4], [2, 1, 0, 4, 3], [2, 0, 1, 3, 4], [0, 3, 2, 4, 1], [3, 2, 0, 1, 4], [3, 0, 4, 1, 2], [3, 0, 2, 1, 4], [4, 2, 0, 3, 1], [4, 0, 2, 3, 1], [4, 0, 2, 3, 1], [4, 0, 2, 3, 1]];


var features_business =  [['food', 'wages', 'fast', 'industry', 'fighting', 'yorkers', 'activist', 'laborers', 'wage', 'protest'], ['wal', 'mart', 'bribery', 'martyrs', 'activists', 'york', 'prison', 'expose', 'fellow', 'conclusion'], ['employers', 'job', 'unemployment', 'market', 'unemployed', 'technology', 'unfair', 'place', 'still', 'perfect'], ['business', 'therapeutic', 'therapy', 'founder', 'president', 'listening', 'therapists', 'systems', 'management', 'clinic'], ['authority', 'holidays', 'christmas', 'people', 'person', 'parable', 'hierarchy', 'live', 'story', 'cowed'], ['box', 'office', 'weekend', 'film', 'avengers', 'releases', 'start', 'comedy', 'summer', 'romantic'], ['films', 'movies', 'hollywood', 'fitzgerald', 'film', 'cinematic', 'scott', 'work', 'books', 'writing'], ['theatre', 'musical', 'team', 'tony', 'writers', 'adventuresome', 'lisa', 'jeanine', 'book', 'fun'], ['workout', 'calories', 'playing', 'sweat', 'feel', 'routine', 'mind', 'kick', 'breaking', 'burned'], ['cancer', 'breast', 'medical', 'professional', 'makeover', 'men', 'society', 'lives', 'awareness', 'consequences'], ['cure', 'tips', 'methods', 'days', 'stressed', 'cranky', 'feel', 'angry', 'worried', 'happy'], ['surgeons', 'work', 'doctors', 'nurses', 'wisdom', 'people', 'climate', 'hawkeye', 'perform', 'pierce'], ['manufacturing', 'economics', 'weapons', 'national', 'security', 'manufacturers', 'medicines', 'america', 'products', 'vehicles'], ['charleston', 'censorship', 'white', 'violence', 'massacre', 'disorder', 'honest', 'aftermath', 'hatred', 'keeping'], ['president', 'party', 'history', 'science', 'outrage', 'welcome', 'remarks', 'discourse', 'evaluation', 'inappropriate'], ['president', 'isis', 'kurdish', 'obama', 'defense', 'refugees', 'humanitarian', 'genocidal', 'emergency', 'responding'], ['smartphone', 'checkup', 'devices', 'physical', 'data', 'patient', 'future', 'breath', 'uploadable', 'health'], ['code', 'technology', 'coding', 'success', 'skill', 'literacy', 'different', 'believe', 'learn', 'writing'], ['software', 'developer', 'applications', 'phones', 'consumers', 'buying', 'renting', 'computers', 'living', 'future'], ['mobile', 'apps', 'technologies', 'bandwidth', 'download', 'quality', 'smarter', 'unreliable', 'need', 'offline']]


var features_entertainment =  [['wages', 'food', 'wage', 'genesis', 'fast', 'students', 'intensity', 'increasing', 'minimum', 'laborers'], ['martyrs', 'campaign', 'bribery', 'activists', 'narrated', 'prison', 'times', 'conclusion', 'result', 'emmanuel'], ['technology', 'employers', 'unemployed', 'market', 'job', 'unemployment', 'ball', 'seekers', 'current', 'less'], ['business', 'application', 'systems', 'clinic', 'kate', 'protocols', 'therapeutic', 'therapy', 'brien', 'sound'], ['hierarchy', 'authority', 'story', 'christmas', 'live', 'parable', 'hamster', 'double', 'standards', 'holidays'], ['box', 'office', 'weekend', 'film', 'avengers', 'releases', 'start', 'comedy', 'summer', 'romantic'], ['movies', 'films', 'hollywood', 'fitzgerald', 'film', 'cinematic', 'scott', 'words', 'hard', 'writing'], ['theatre', 'writers', 'musical', 'particularly', 'tony', 'life', 'disheartening', 'book', 'without', 'absence'], ['calories', 'workout', 'sweat', 'playing', '7', 'feel', 'mind', 'make', 'minutes', 'notch'], ['cancer', 'medical', 'awareness', 'breast', 'makeover', 'professional', 'needs', 'lives', 'begin', 'lack'], ['tips', 'blues', '5', 'stressed', 'funk', 'days', 'fuse', 'worried', 'happy', 'feel'], ['climate', 'wisdom', 'surgeons', 'fictional', 'nurses', 'hawkeye', 'work', 'people', 'ease', 'pierce'], ['economics', 'manufacturing', 'security', 'medicines', 'manufacturers', 'chemicals', 'infrastructure', 'products', 'national', 'weapons'], ['charleston', 'massacre', 'keeping', 'violence', 'hatred', 'honest', 'mental', 'may', 'mood', 'defiance'], ['president', 'party', 'science', 'welcome', 'discourse', 'facts', 'intellectual', 'souls', 'require', 'evaluation'], ['obama', 'president', 'defense', 'responding', 'crisis', 'humanitarian', 'block', 'genocidal', 'refugees', 'emergency'], ['checkup', 'record', 'data', 'future', 'devices', 'physical', 'patient', 'using', 'readable', 'electronic'], ['code', 'technical', 'coding', 'technology', 'learn', 'skill', 'literacy', 'art', 'success', 'reading'], ['consumers', 'computers', 'applications', 'software', 'phones', 'tools', 'developer', 'easier', 'critical', 'access'], ['smarter', 'technologies', 'anticipate', 'cache', 'need', 'unreliable', 'prepare', 'bandwidth', 'quality', 'speed']]


var features_healthy =  [['yorkers', 'wages', 'wage', 'fast', 'laborers', 'marched', 'protest', 'york', 'food', 'intensity'], ['activists', 'martyrs', 'prison', 'campaign', 'wal', 'mexico', 'mexican', 'mart', 'arizcorreta', 'death'], ['market', 'employers', 'unemployed', 'unemployment', 'technology', 'job', 'unfair', 'place', 'standard', 'seekers'], ['business', 'therapeutic', 'therapy', 'president', 'founder', 'therapists', 'listening', 'systems', 'clinic', 'kate'], ['authority', 'hierarchy', 'live', 'christmas', 'cowed', 'double', 'pleasing', 'modern', 'person', 'existence'], ['box', 'film', 'weekend', 'avengers', 'comedy', 'debuted', 'season', 'releases', 'think', 'start'], ['films', 'fitzgerald', 'movies', 'hollywood', 'film', 'scott', '1940', 'hard', 'cinematic', '1920s'], ['theatre', 'writers', 'life', 'musical', 'particularly', 'disheartening', 'absence', 'without', 'female', 'bechtel'], ['workout', 'calories', 'sweat', 'playing', 'feel', 'routine', 'mind', 'kick', 'breaking', 'burned'], ['cancer', 'breast', 'medical', 'professional', 'makeover', 'lives', 'men', 'society', 'awareness', 'begin'], ['tips', '5', 'blues', 'stressed', 'funk', 'days', 'fuse', 'worried', 'happy', 'feel'], ['surgeons', 'nurses', 'doctors', 'wisdom', 'climate', 'fictional', 'ease', 'operating', 'positive', 'everyone'], ['medicines', 'economics', 'manufacturing', 'security', 'weapons', 'manufacturers', 'movement', 'infrastructure', 'vehicles', 'chemicals'], ['charleston', 'illness', 'censorship', 'massacre', 'hatred', 'mental', 'violence', 'white', 'feel', 'defiance'], ['president', 'party', 'history', 'discourse', 'outrage', 'souls', 'scandalous', 'remarks', 'facts', 'science'], ['president', 'obama', 'isis', 'defense', 'kurdish', 'refugees', 'humanitarian', 'commends', 'genocidal', 'crisis'], ['health', 'smartphone', 'checkup', 'data', 'electronic', 'patient', 'devices', 'future', 'uploadable', 'record'], ['code', 'technical', 'coding', 'technology', 'reading', 'skill', 'english', 'believe', 'different', 'find'], ['developer', 'applications', 'consumers', 'software', 'computers', 'living', 'buying', 'phones', 'renting', 'old'], ['apps', 'mobile', 'technologies', 'bandwidth', 'cache', 'download', 'periods', 'unreliable', 'smarter', 'speed']]


var features_politics =  [['food', 'wages', 'fast', 'industry', 'fighting', 'yorkers', 'activist', 'laborers', 'protest', 'marched'], ['wal', 'mart', 'bribery', 'martyrs', 'activists', 'prison', 'york', 'battles', 'conclusion', 'fellow'], ['job', 'technology', 'employers', 'market', 'unemployed', 'unfair', 'current', 'unemployment', 'inaccurate', 'practices'], ['president', 'therapists', 'founder', 'business', 'therapy', 'therapeutic', 'systems', 'minson', 'co', 'kate'], ['authority', 'hierarchy', 'pleasing', 'live', 'person', 'cowed', 'external', 'christmas', 'holidays', 'modern'], ['box', 'weekend', 'film', 'office', 'avengers', 'releases', 'comedy', 'debuted', 'romantic', 'tops'], ['movies', 'films', 'hollywood', 'film', 'fitzgerald', 'cinematic', '1940', 'writing', 'scott', 'work'], ['theatre', 'musical', 'historically', 'adventuresome', 'fun', 'tony', 'team', 'best', 'book', 'witness'], ['playing', 'make', 'fun', 'inclines', '7', 'kick', 'ways', 'faster', 'mind', 'cardio'], ['cancer', 'breast', 'medical', 'makeover', 'advocating', 'lives', 'professional', 'pink', 'society', 'sea'], ['5', 'happy', 'feel', 'stressed', 'steps', 'tips', 'cure', 'funk', 'days', 'worried'], ['climate', 'surgeons', 'doctors', 'nurses', 'work', '4077th', 'perform', 'room', 'operating', 'pierce'], ['manufacturing', 'economics', 'weapons', 'national', 'security', 'america', 'products', 'manufacturers', 'infrastructure', 'movement'], ['charleston', 'illness', 'censorship', 'massacre', 'hatred', 'mental', 'violence', 'white', 'feel', 'defiance'], ['president', 'party', 'history', 'science', 'outrage', 'discourse', 'welcome', 'remarks', 'facts', 'souls'], ['president', 'obama', 'kurdish', 'isis', 'defense', 'refugees', 'humanitarian', 'genocidal', 'commends', 'responding'], ['smartphone', 'health', 'electronic', 'physical', 'devices', 'data', 'uploadable', 'interaction', 'comprehensive', 'patient'], ['code', 'technical', 'technology', 'learn', 'coding', 'skill', 'reading', 'success', 'land', 'language'], ['developer', 'software', 'applications', 'cool', 'phones', 'easier', 'tools', 'confusing', 'renting', 'harder'], ['apps', 'mobile', 'download', 'technologies', 'smarter', 'unreliable', 'offline', 'remember', 'need', 'read']]


var features_tech =  [['food', 'wages', 'wage', 'laborers', 'minimum', 'intensity', 'genesis', 'industry', 'increasing', 'students'], ['wal', 'mart', 'prison', 'martyrs', 'mexican', 'bribery', 'mexico', 'activists', 'battles', 'narrated'], ['technology', 'unemployment', 'employers', 'job', 'market', 'unemployed', 'unfair', 'still', 'many', 'place'], ['business', 'therapeutic', 'therapy', 'therapists', 'application', 'clinic', 'systems', 'management', 'brien', 'listening'], ['holidays', 'live', 'story', 'existence', 'modern', 'cowed', 'people', 'parable', 'external', 'authority'], ['box', 'weekend', 'office', 'film', 'avengers', 'start', 'summer', 'releases', 'comedy', 'romantic'], ['films', 'movies', 'hollywood', 'fitzgerald', 'film', 'books', 'cinematic', 'scott', 'writing', 'today'], ['theatre', 'musical', 'tony', 'team', 'book', 'writers', 'life', 'adventuresome', 'jeanine', 'disheartening'], ['workout', 'calories', 'sweat', 'routine', 'playing', 'inclines', 'feel', 'kick', 'cardio', 'speed'], ['breast', 'cancer', 'medical', 'makeover', 'sea', 'lives', 'begin', 'society', 'pink', 'needs'], ['stressed', 'tips', 'days', '5', 'angry', 'feel', 'happy', 'cure', 'worried', 'fuse'], ['surgeons', 'nurses', 'doctors', 'wisdom', 'positive', 'fictional', 'perform', 'best', 'creating', 'right'], ['economics', 'manufacturing', 'chemicals', 'devices', 'medicines', 'national', 'movement', 'security', 'america', 'gear'], ['charleston', 'censorship', 'white', 'illness', 'massacre', 'lifelong', 'defiance', 'hatred', 'violence', 'disorder'], ['president', 'party', 'science', 'history', 'welcome', 'outrage', 'inappropriate', 'remarks', 'discourse', 'facts'], ['obama', 'president', 'kurdish', 'genocidal', 'refugees', 'crisis', 'right', 'hold', 'defense', 'block'], ['smartphone', 'health', 'devices', 'patient', 'data', 'electronic', 'checkup', 'future', 'uploadable', 'physical'], ['code', 'technology', 'coding', 'technical', 'success', 'skill', 'different', 'literacy', 'learn', 'language'], ['software', 'developer', 'applications', 'phones', 'consumers', 'computers', 'buying', 'living', 'renting', 'honest'], ['apps', 'mobile', 'technologies', 'download', 'bandwidth', 'offline', 'reliably', 'periods', 'going', 'prepare']]


var importance_business =  [[0.17992413772439939, 0.1733229243252777, 0.1370494785296702, 0.12010385792161843, -0.11374340162524924, -0.09236918083199505, -0.0586740661876333, 0.056298301476548344, 0.046531274569530344, -0.03999029015477367], [0.5666081281207962, 0.42267112368729254, 0.22325775885857188, -0.07688147012418214, -0.057462539413879514, 0.04511423206704881, -0.039521361716052715, -0.02657068100337733, -0.025566262761686148, -0.02401235094521811], [0.03867548319653921, 0.038453580646487746, 0.0345002403361164, 0.03350297748551554, 0.031679676274322, -0.011347283424191053, 0.00820281631927149, -0.006829788841301299, -0.0056613432389821155, 0.004561785842713643], [0.751392757080651, -0.11412317754948657, -0.07669380739547241, 0.06468785973215674, 0.06305973796235327, -0.05640824825535364, -0.044333267006256734, 0.03604710412862485, 0.02775534443178857, -0.026797956094844307], [-0.09749344068967268, -0.06577767925353793, -0.05816929754780455, 0.05232489388117327, 0.05191722081886316, -0.05087689084653808, 0.047697982990782595, -0.03735707992028161, -0.03619531822973309, -0.022926426396295344], [-0.05049501776565004, 0.04723898871808913, -0.04113086958194215, -0.04003300121291295, -0.029063048178594644, -0.013466420880635425, 0.01290979506081182, -0.00976935905930958, 0.009672849964197422, -0.007923809598688835], [-0.005095284725579208, -0.005039447765673731, -0.004595557500809377, -0.004365978580971585, -0.004150409574393098, -0.0027608280164335332, -0.0026976484487251135, 0.002117728183181044, 0.0016373251352342038, -0.0015951271507694423], [-0.022593133171351084, -0.021750145295056714, 0.018339065304763695, -0.014606627768885107, -0.012386616609884169, -0.00965524302525455, -0.009147202994107225, -0.007737485877800351, 0.005654562287917552, -0.005623234469226526], [-0.003061953986135987, -0.002592183283818104, 0.0019386815853126187, -0.0019151853501454103, -0.0014490467927825075, -0.0013468686458375447, -0.0011644423125962012, -0.0011341681708423742, -0.0011078750337474403, -0.0008211186334380938], [-0.05188740981477464, -0.04745421463610883, -0.04542979499671912, 0.03792007092664732, -0.014203660716995407, 0.013818786517315464, 0.010194930772336758, -0.009852630021713079, -0.008511261486761155, -0.008106256185749889], [-0.0013210520167463039, -0.001127116112949279, 0.0010698262458902293, -0.0010394504336278102, -0.0009926368956035781, -0.0008822060048877338, -0.0008711832738321552, -0.0008670729410072414, -0.0008468267509294369, -0.0006564781057202042], [-0.050557172838726926, 0.03826267634825326, -0.03661798866366912, -0.03501708934320015, -0.026584887746916606, 0.01841155435735389, 0.0169791631159161, -0.009803360339757478, -0.009741844458843685, -0.007765688250126977], [0.38171604820690663, 0.2676316271468402, -0.16598334935853806, -0.09606829562310502, -0.0711652199107705, 0.06662419215461689, -0.06399073114695197, -0.06115181600203578, 0.05210997911325872, 0.051983831344748876], [-0.003930135985843044, -0.0021391203061719623, -0.0018825269604351065, -0.0014212847834575823, -0.0013349153357513153, -0.001182149371110667, 0.000834049687008291, -0.0007315147969792832, -0.0007205662652499929, -0.0006350290376355192], [-0.05129822371189978, -0.04300555161978186, -0.014366314785211802, 0.012403515867101884, -0.012067705389105428, 0.008984134345967055, -0.00821644819114824, -0.007598093527007404, 0.005621372716103449, 0.003636929221571588], [-0.003914249467508121, -0.003675587824508468, -0.0034413190590613717, -0.003370449945750462, -0.002804271633151973, -0.002405102712093685, -0.002317403034984245, -0.0019605354568974784, -0.0015202303542210024, -0.0014920155394128028], [-0.19337726428526902, 0.10256871809934162, -0.05395734640229305, -0.0495205045968914, 0.025742850920356487, 0.02519067376677271, -0.01721977655002565, 0.016849955695416884, -0.013214495636109677, -0.0099281047014354], [-0.2086059039377368, -0.06331814970462343, -0.057533118612671665, 0.05477204961564658, 0.032641083875239486, -0.029884461686035844, 0.02427680054885031, -0.023511022103770193, 0.02206089563377429, -0.01815429289853624], [-0.10416443924410455, -0.07562125791562738, -0.07535009641195692, -0.061506034794289545, 0.058806014353515026, 0.042638353973119145, 0.026793449212954738, -0.02571585693840777, 0.012701284246366028, -0.011579994822752432], [-0.052592958180111435, -0.051873123069694695, -0.019407398700541888, -0.012550017053988349, -0.012063411735999712, 0.009252469994428567, 0.008522632159819167, 0.004939957164569412, 0.004600854549954399, -0.004324541179583004]]


var importance_entertainment =  [[-0.0016589035451141977, -0.001453750985718127, -0.0013761969876789734, 0.0013716387046552108, -0.0012895634217208176, -0.0010199134902617883, -0.0008590121924205717, -0.0008247561211816469, -0.0007775447627439814, -0.000713824303469283], [-0.007946141442861777, -0.007917519746246458, -0.007842300998489342, -0.007035191169575413, 0.0063135462018884085, -0.0054895921411043675, -0.00526507743529332, -0.004818233055795348, -0.004249654706060414, 0.002394307215364406], [-0.0015954444057160915, -0.001522361613006764, -0.0014810038895098163, -0.0013899839212087864, -0.0013776519114532277, -0.0012345060622168415, 0.0009039324640453479, -0.000620291232476303, 0.00043855347799430684, -0.0004314451073903434], [-0.005930621726277425, -0.0032309619744866147, -0.002755306861380255, -0.0026056908461883042, 0.0025362325703380704, -0.002516308540698665, -0.0024020729202755805, -0.0022900099615086734, 0.0020434624790366465, 0.0017378470964194942], [-0.07830812439962118, -0.07360728675070155, 0.06025191637779935, 0.06001087457078914, 0.04284575039313186, 0.034514753771631046, 0.029211421283264906, 0.029066314930586607, -0.02426540870672549, -0.022617796355460983], [0.05807045646582411, -0.04963774733881275, 0.04790573956168577, 0.04460203825668774, 0.032280545694995444, 0.015835768218300225, -0.014615574301398161, 0.012054385399443483, -0.010308118976146289, 0.009369955630266722], [0.025602202979262603, 0.02533949271034204, 0.022901998834370562, 0.021156607969841285, 0.0205545191876452, 0.013712140606723763, 0.013119303004481967, -0.00565723448569265, -0.005085598643632816, 0.0049724949327440305], [0.08959658088970625, 0.06611939929914334, 0.06292844092100887, 0.036752706803541806, 0.033283150500643455, -0.02076238937179488, -0.019973928333152646, -0.019567221622296026, -0.019469252251988374, -0.017481544252938862], [-0.0007418990556354061, -0.0006911882090512692, -0.0006561415583374177, 0.0005309946064846586, -0.0005026187625375075, -0.0004078746321589235, -0.00040722618346950094, -0.00037843657023571917, -0.0003274828853051471, 0.0001675520947165227], [-0.005346451864450002, -0.005095880968604185, -0.004130378069058986, -0.003969766178148988, 0.0031031171728002206, -0.0027348825971992246, -0.0026124614145618726, -0.002277415493498538, -0.002253561026239491, -0.001554714179128359], [-0.05908770875539, 0.05693048183710074, -0.05664926545108262, -0.05111382689240685, 0.049969738727085426, -0.04096597516643741, 0.025906593013932375, -0.02335076832075275, -0.019431686101301738, -0.01775298154372093], [-0.039871364984408214, -0.03769992189890479, -0.03418463467418431, 0.032570670501209056, -0.02626998392328944, 0.024029136182103596, -0.023009778332896122, -0.021602722412495716, -0.017736482300122043, 0.010131683727954033], [-0.0007349311113088659, -0.0005741127168902042, -0.0003465942366832043, -0.0003397234527040287, -0.000303576512573986, -0.0002345791111922556, -0.00022292966916155358, -0.00021751608522980104, 0.00018894583688829826, 0.000145671568110219], [-0.002899265127870371, -0.002473997549164942, -0.0014458799923248618, -0.0014170011995428807, -0.0011684103605084277, 0.0011287521538453065, 0.0008561145104402478, -0.0007863037800981541, 0.0007548062395008918, -0.0007163291623996712], [-0.015525508013161347, -0.007171621429316149, -0.005253814549847655, 0.004459435005812673, -0.004437532875651197, -0.004386000161192828, -0.002971721934374885, 0.002908093195386528, -0.0027968133196501297, -0.002498869864616447], [-0.0007141052818617722, -0.0006883330446804593, -0.00048764954635637257, -0.0004767287591077456, -0.00044823917683139205, -0.0004176439693660802, -0.0003870461715101041, -0.0003868277716505784, -0.0003680819962569521, -0.0003464679479093014], [-0.0016697795311060872, 0.001431547034518555, -0.0013671842415603156, 0.0012921418966086345, -0.0011806977588306067, -0.0010625938694490981, -0.001057294511197415, -0.0009972578821671072, -0.0009935405072595714, -0.0009730648217766241], [-0.0016487815605169486, -0.001529553689511107, -0.0014300247541338957, -0.0013670714606128047, -0.0007657715434732839, -0.0007241442284610999, -0.0006959608684868239, 0.0006771360078737303, -0.0006366769042588454, -0.0005570101301295188], [-0.0007742766780823554, -0.0007276663583102936, -0.0006669464530083224, -0.0006525676881180199, -0.0006175858524829621, -0.0005926241706950087, -0.0005876027415435025, -0.0005644949533184776, 0.0005501674562094944, -0.0005201216510371873], [-0.00034502079440635924, -0.00029493987196699034, -0.00028163389905904243, -0.00026904243192573323, -0.0002647304764257322, -0.00025867226701114393, -0.0002539478258506676, -0.0002526069508153484, -0.0002403360073137685, -0.00023242198930741536]]


var importance_healthy =  [[-0.007382813612496955, -0.006888007690240474, -0.006353399431116407, -0.006279804290777362, -0.006063316311764719, -0.005266014282143519, -0.005245127070037791, -0.004889750492324787, 0.003538246302925374, 0.0025823699211835927], [-0.001346865557009601, -0.001326280842429294, -0.0013116498130568885, -0.0012142972667181597, -0.0011324817804579776, -0.0010927092117113194, -0.0010001604735278295, -0.0009763959482577447, -0.0009361473714237179, 0.0008421656789317512], [-0.0063380012487916975, -0.00619271590278067, -0.006111181690723728, -0.006005498959158995, -0.005289018817924862, -0.004747368701812703, -0.0038762311538058044, 0.002934080862708067, -0.001911523211515494, -0.0013345683669487949], [-0.7248022625104215, 0.1360226730051471, 0.09325448564590262, -0.06486318869311701, -0.0630859961323997, 0.060069868527640645, 0.05218878039078264, -0.03850047497117873, 0.03725117045195059, -0.031311812085443806], [-0.15114863895596112, -0.12377231692682421, 0.09449262614370178, -0.07708139036614088, -0.07089196575352746, -0.05313803992965918, 0.05268813166584638, -0.049604885455047015, 0.042965808457080396, 0.042089828062266646], [-0.001630530753659966, -0.0016014994717212692, -0.0015546589401958769, -0.0013726225439019185, -0.0012550334490031578, -0.0012266620376427883, -0.0012052340864945358, -0.0011731599025915696, 0.0009448455174318189, 0.0009120749715283618], [-0.0074261169181327425, -0.00733968318899645, -0.007282736612925555, -0.006874166727130694, -0.005989995405206301, -0.005950137498641554, -0.004073503104776958, 0.003827075475806419, -0.0029844108187446266, -0.0023608986881756473], [-0.05566738688942959, -0.049307616966147993, 0.03149130661466358, -0.029944962654452633, -0.028601227516231113, 0.0239302089528113, 0.021214469045957977, 0.018359652903135695, -0.015894330824430654, -0.012405007351856541], [0.0041436853230382995, 0.0035881501826049303, 0.0028802880253960576, -0.0024299795132044348, 0.0021306463361242373, 0.0019921737919334787, 0.0017989179667636606, 0.001686983179786273, 0.0016455327079733216, 0.001194533337838543], [0.06826662245007467, 0.062321275176415815, 0.06060216397499304, -0.029555559955753475, 0.019223106728879398, 0.01773172304055268, -0.014254947393284064, -0.013809364882827723, 0.012197923664327053, 0.011721786838580299], [0.0610284072698466, 0.058016633613578006, -0.05622136388326998, 0.052982615905278106, -0.04973583544300459, 0.042700092352334476, -0.02632691754428543, 0.02478249667778498, 0.020928206581270776, 0.019473940742871412], [0.14895241621791777, 0.1060623283707482, 0.08970896783700405, 0.06706880185024916, -0.04783947281946702, -0.042382237436692075, 0.02436883999554404, 0.02329911531954332, 0.022962640214191095, 0.020554375523133956], [0.07034989797254444, -0.058128485138959005, -0.05216507015183648, -0.03730679293093134, -0.029204455612523446, -0.01878837618903934, -0.01625049335228889, -0.015160377209253912, -0.013212327733637874, 0.011409140953768451], [-0.3230716222473825, 0.21511764505512673, -0.21340715784439798, -0.15230222406654914, -0.14176489783018778, 0.12440923825676702, -0.11573683693759297, -0.08021094134881077, 0.06700391031805526, -0.060160482010247686], [-0.03234464846255808, -0.02311237342324572, -0.02153917786481001, -0.0161567920361559, -0.015531541210229649, 0.011328942497231277, -0.01097960457689864, -0.009575401766947296, -0.009122336602399621, -0.008666454779638228], [-0.007998949257612274, -0.0077509992091048105, -0.00772585773094053, -0.007695063056738345, -0.007410761433557944, -0.005821026928659852, -0.005012553480516267, -0.004738582578085073, -0.003964089633762542, -0.002818953310199287], [0.21780193145934357, -0.18476522334182466, -0.15144759046437398, -0.09781392958572761, -0.08209804119745998, 0.08066501355375191, -0.05480550361325459, -0.0345167282037082, -0.03412667936821728, -0.030855576416237044], [-0.07087687089714584, -0.056964782591039716, -0.041304129876794306, -0.03891128395797971, 0.014663589082099296, 0.013879384197951792, -0.012282251969214513, 0.01185535598366719, 0.01062485105272525, 0.00802062481919706], [-0.01601920707018386, -0.014823714168873429, -0.01469963674360376, -0.014624126200094869, -0.01231979403720759, 0.012289277842793093, -0.008675235420534654, -0.008371025201483941, -0.007703146593758333, 0.0054331001251506856], [-0.014527381514585751, -0.0119050268390434, -0.01057623707810307, -0.008027928171859393, -0.007517306678654351, -0.007407569357661032, 0.004753755841775564, -0.004060975091892603, -0.0038707924449248145, -0.002896783292792886]]


var importance_politics =  [[-0.1863090975916767, -0.16858421451958458, -0.13371706696478466, -0.12095074084231074, 0.11167212802282295, 0.09504251496722056, 0.0554558475669418, -0.05441682495133102, 0.041012913411971885, 0.04048549673007778], [-0.5658840959441834, -0.4153541097786071, -0.2153011887992019, 0.08788213949123543, 0.06499996993748842, 0.04778786621084775, -0.041039355935762384, 0.02900314386569287, 0.028772995276977405, 0.02704067435739502], [-0.008419378109346053, -0.008144251343710994, -0.006783400809247673, -0.005745127372664756, -0.005223985982568234, 0.0028342623087147458, 0.0026432544659213803, -0.002426564445038024, 0.0023115832856000942, 0.002034311225141747], [0.004982992757582212, -0.0027715760139835886, -0.0026426172844422223, -0.0025173792894511143, -0.0024338196423481003, -0.002365745409240145, -0.0021415468114349408, -0.002081099813929731, -0.001998239197774473, -0.0019860352919592815], [0.3284902583705851, 0.16009754822194835, -0.1015656921562902, -0.09489536528339587, -0.09230718539093181, 0.08704956306120384, -0.08150429297749465, 0.0782307256295783, 0.0758401782185496, 0.06936540573364842], [-0.0025966738001352357, -0.002099967464889226, -0.0012020774611903125, 0.0010734520649017365, -0.001024008486317144, -0.0007544361821506579, -0.0005898210381202405, -0.0005578658476910688, -0.0004901611749260373, -0.0004817927492629154], [-0.010686829068670455, -0.010567899227677185, -0.009323554521601307, -0.008434315873913238, -0.007402576949326533, -0.00679854424288884, 0.004425761796889362, -0.0034985379641942903, -0.0032041571069853477, -0.0028562585654595507], [-0.0049247257652816736, -0.004239678004926082, 0.0029353239567658463, -0.0026907502550390394, -0.0025195371885188104, -0.0024620779841422065, -0.0020269831833677854, -0.0018448745045278202, 0.0012628873420649645, 0.0012580771985116332], [-0.00023415114404945773, -0.0001767491467414041, -0.00016825583650124186, -0.00014953654947105714, -0.00014194294185434117, -0.00013023469604923552, -0.0001280335736733978, -0.00012517683447607159, -0.00011362938383673729, 9.578153111803674e-05], [-0.009756087387143111, -0.009650271065790136, -0.008354568020720958, -0.007483621315025394, 0.006465346538403665, -0.005488501968689889, -0.00548403429452598, -0.005129540922479964, 0.0041262932832946495, 0.0032509654774023973], [-0.0005122496364745603, -0.0004318173521404206, -0.000391519486186181, -0.00034774047669413087, -0.000335204526217959, -0.00031625227729825927, -0.00031444632198080423, -0.00029547965740403043, -0.00028922573662421084, -0.0002614227116899626], [0.06770116263132657, -0.0647883174064132, -0.04544063398924394, -0.04454134255043829, -0.0195373924586361, -0.016075353217031844, -0.014396494464999524, -0.012592306662592982, -0.010021550518415957, 0.007836817811210662], [-0.3245312023018932, -0.1983074268607962, 0.18712441016794867, 0.10585675028837326, 0.09529954148561288, 0.06678728757147988, -0.05845365448361851, -0.053514460063635645, 0.03741589083827678, 0.03695542985882712], [0.33327582070162975, -0.21358601293298538, 0.21233233014146183, 0.15767547512754504, 0.14506717633176952, -0.12586703996850476, 0.11972111194238459, 0.08491123700106555, -0.06651238384900113, 0.06254048000867835], [0.1461266319537775, 0.11440405732098365, 0.06527034074160964, -0.03675799692525523, 0.0367433251918264, 0.03297041124468736, -0.028588797351126915, 0.02687242529913934, 0.019822580141371407, -0.017287308531432368], [0.0142683220696045, 0.013277141686333939, 0.01210649555562699, 0.011858400332163415, 0.011854077472499133, 0.00937070171042893, 0.008419042587122933, 0.007012914001821341, 0.0059296879254308685, 0.004466741302348161], [-0.007195174816668566, 0.004283687998271379, 0.0010696518015242897, -0.0010425510007866495, -0.0009621758395929213, 0.0008061920554068832, -0.0007254270597431814, -0.0006172441453209563, 0.0006126376888014661, 0.0006038289709455126], [-0.007355108595804075, -0.006432798403373494, -0.006287735890799459, -0.0060510531696951675, -0.005480250121940272, -0.004310023772613322, -0.0035573465559133807, -0.0032232483139346345, 0.0028133778513329904, 0.002423809340676038], [-0.0008150767829906692, -0.0003274446103307553, -0.00029905306349594274, -0.000295463579572921, -0.0002938390111658641, -0.0002748761137589141, -0.00022872324659752247, -0.00020821460218134008, -0.0002057753110495565, -0.00020448869240304867], [-0.0020060947534931814, -0.0017603420010180951, -0.0006758061942107664, -0.0006694934650076726, -0.0005985588047939318, 0.0005183712598732538, -0.0004954385139938211, -0.00048496321330261845, -0.00039886023428035956, 0.00020170803798162784]]


var importance_tech =  [[-0.001382182995498832, -0.0010919526709553674, -0.0009748123134173271, -0.0006688665971633089, -0.0005920193139744202, -0.0004208715328057951, 0.0003805439194608127, -0.00033680053749809714, -0.00027983134498465935, 0.00023552168600162875], [0.0019041487281659976, -0.0016184514466187406, -0.0015431628204599806, -0.001466731772916887, -0.0010762658297990288, 0.0008127222324558356, -0.0007882102729618653, -0.0007459305949405604, -0.0007404044375514697, 0.0005888499166929135], [0.026476381494694712, -0.025139586901366057, -0.024627299012925076, -0.02432870837245598, -0.02034732849565749, -0.018975145608359122, -0.007071832187388817, 0.004919941912657051, -0.004702348492225323, 0.003709221091670939], [-0.017979411323433506, -0.016846534753773113, -0.012636271474106654, -0.01168240061747276, 0.009024000886410087, -0.0074881642542663105, 0.00726071309149439, -0.0067194708786956665, 0.005456589200944732, 0.004967709403387377], [-0.01103617837905148, -0.0062136959704491585, 0.005078750799294385, 0.004780532149392861, 0.004743929724545079, 0.004096861664266382, -0.003722615846070817, 0.003018103953378032, 0.0028933895634288154, -0.0025892040655020087], [-0.0032078630470748584, -0.003000843803284663, 0.0021035619371477733, -0.001671024398777961, -0.0006742617227497433, 0.0006645684053698724, 0.000513482334188838, -0.00038281449342615094, -0.0003434859420819529, -0.00030190930389028587], [-0.0017519143316005834, -0.0016978945363803203, -0.0015432450639938464, -0.0015274850441316676, -0.001427107603202155, 0.0009781196691380284, -0.0008205425451973593, -0.0007129255251306629, -0.0006424828521035377, 0.0005032489225790003], [-0.003740300460525303, -0.00368698128178409, -0.0026448457856434134, 0.0017420333253848896, 0.0016936724880680944, -0.0015671983379675848, -0.0015351632325101123, -0.001434073239586354, -0.0010336115463474276, -0.0009992367338299932], [-0.0004166876596358934, -0.0003186620176078331, -0.00031073111416589843, -0.0002356525513797671, 0.00018829623232274846, -0.00016691635715250364, -0.00016495789374608585, -0.00015847987367883067, 0.00013473567208573985, 0.00013410259406290774], [-0.0017561404402078348, -0.0017556136784809828, -0.0015456856159944622, -0.0005980715432676964, 0.0005950411237951063, -0.0005013704772223056, -0.00043844854347513575, 0.0004305796949964751, -0.0003896212580137805, -0.00034395789283313386], [-0.00030946275116900833, -0.0002959603227866597, -0.00026082331011617, -0.00025297707921015416, -0.00023868446107574344, -0.00022167529900155323, -0.00021191515717091332, -0.0001951333612903362, -0.00019301335792903278, 0.00017174055770179022], [-0.002668275776022582, -0.0022017703616139415, -0.0020445477167004085, -0.0014484624792626476, -0.0010091695678355807, 0.0009885976257960976, -0.0007811125347344108, -0.0006217585415376825, 0.0005683708384220363, -0.0004958913917048731], [-0.018289455902688625, -0.011108199915397132, -0.010678835674101769, 0.01017366478227646, -0.009672196535940892, -0.007224231296483758, -0.006911819627809672, 0.006773885551922338, -0.0043374252020945804, 0.002185206953029922], [-0.0030366095801391264, 0.0028830625603920804, -0.001951559758886991, -0.0014862243889246774, -0.0013419829274983156, -0.0010001071445355821, -0.0009892458210874115, -0.0009876660153016286, -0.000977950000693025, -0.0008154121553350955], [-0.04712039050232077, -0.040957931343811226, 0.038527821532845466, -0.027405346467364526, 0.008454243906521641, -0.0072343087682346305, 0.007032818346103442, -0.006602003997031238, -0.003968572624715062, -0.0036533510425301712], [-0.0014507845812562965, -0.0013599244289022718, -0.0006885486472309104, -0.0006798996267368103, -0.0006193426445430033, -0.000572559621902262, -0.0005527631408863023, -0.0005397028715030092, -0.0005383932669211841, 0.0003893154540406899], [0.38722685232587056, -0.2099427414618511, 0.11398216345952111, -0.1021940650779804, 0.07418829243410693, 0.07015913627808647, 0.05242199997258902, 0.052201405267937435, 0.050515084546422714, 0.049188838310394035], [0.28769657517005115, 0.10677747580618925, 0.10481912433596484, 0.07889086701738532, -0.041486882393600544, -0.041471723951356045, -0.035154460754352884, 0.025112609401192976, -0.023347176687369804, 0.01783135664509576], [0.12130312522267092, 0.09447064126791918, 0.09222911987630944, 0.07195078914943498, -0.041503897598213206, 0.04039248567828733, -0.03198014989032212, -0.0232953810459451, -0.01709200081878481, -0.013399530203370457], [0.06953755218550273, 0.06677535608023905, 0.03198193494093486, 0.021274069129517473, 0.021170546405173674, 0.008427943064037548, -0.0060608229443581555, -0.005920905252176792, -0.005906508973256701, -0.004795994625304224]]

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

		max: 0.5,
		min: -0.5,

		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},

	series: [{
		name: 'Evidence against BUSINESS',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for BUSINESS',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for ENTERTAINMENT',
		data: [
			 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against HEALTHY LIVING',
		data: [
			0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for HEALTHY LIVING',
		data: [
			0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against POLITICS',
		data: [
			-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for POLITICS',
		data: [
			0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against TECHNOLOGY',
		data: [
			  0, -0.0439857007516732, -0.03872042257826044, 0, -0.028222141594886927, -0.024543454122409, -0.02348784755752732, 0, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for TECHNOLOGY',
		data: [
			0.1362141284382676, 0, 0, 0.03344750475770304, 0, 0, 0, 0.013443664876114599, 0.010709410917512669, 0.00974989891968158
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against BUSINESS',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for BUSINESS',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for ENTERTAINMENT',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against HEALTHY LIVING',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for HEALTHY LIVING',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against POLITICS',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for POLITICS',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FCB795",
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

		max: 0.5,
		min: -0.5,


		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
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
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against TECHNOLOGY',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#628FAB",
	}, {
		name: 'Evidence for TECHNOLOGY',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FCB795",
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
var questionnaire_data2 = null;

var case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var correct_case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var prolific_id = 'prolific_id';

var attention_check_useranswer = [];

var ai_pred = null;

var option_list = ['BUSINESS', 'ENTERTAINMENT', 'HEALTHY LIVING', 'POLITICS', 'TECHNOLOGY'];





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

var tutorial_tab1_clickTimes = null;
var tutorial_tab2_clickTimes = null;
var tutorial_tab3_clickTimes = null;
var tutorial_tab4_clickTimes = null;
var tutorial_tab5_clickTimes = null;

var tab1_clickTimes = null;
var tab2_clickTimes = null;
var tab3_clickTimes = null;
var tab4_clickTimes = null;
var tab5_clickTimes = null;





//用户点击tutorial_tab1的时间
$("#tutorial_tab1").click(function(){
	var what_clicked = "tutorial_tab1";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab1_clickTimes += 1;
});


//用户点击tutorial_tab2的时间
$("#tutorial_tab2").click(function(){
	var what_clicked = "tutorial_tab2";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab2_clickTimes += 1;
});

//用户点击tutorial_tab3的时间
$("#tutorial_tab3").click(function(){
	var what_clicked = "tutorial_tab3";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab3_clickTimes += 1;
});


//用户点击tutorial_tab4的时间
$("#tutorial_tab4").click(function(){
	var what_clicked = "tutorial_tab4";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab4_clickTimes += 1;
});


//用户点击tutorial_tab5的时间
$("#tutorial_tab5").click(function(){
	var what_clicked = "tutorial_tab5";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab5_clickTimes += 1;
});


//用户点击tab1的时间
$("#tab1").click(function(){
	var what_clicked = "tab1";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab1_clickTimes += 1;
});

//用户点击tab2的时间
$("#tab2").click(function(){
	var what_clicked = "tab2";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab2_clickTimes += 1;
});

//用户点击tab3的时间
$("#tab3").click(function(){
	var what_clicked = "tab3";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab3_clickTimes += 1;
});

//用户点击tab4的时间
$("#tab4").click(function(){
	var what_clicked = "tab4";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab4_clickTimes += 1;
});

//用户点击tab5的时间
$("#tab5").click(function(){
	var what_clicked = "tab5";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab5_clickTimes += 1;
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
	// $(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


});


$("#accept_button").click(function(){

    $(".nav-tabs a[href='#tutorial']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});
$("#reject_button").click(function(){

    $("#quitModal").modal('show');

});




$("#go_to_middle_page").click(function(){
	var objData1 = $("#tutorial_finaldecision").serializeArray();

	console.log(objData1);


	// 先进行attention check
	if((document.getElementById('attention_question_1-1').checked == false && document.getElementById('attention_question_1-2').checked == false && document.getElementById('attention_question_1-3').checked == false && document.getElementById('attention_question_1-4').checked == false) 
	|| (document.getElementById('attention_question_2-1').checked == false && document.getElementById('attention_question_2-2').checked == false && document.getElementById('attention_question_2-3').checked == false && document.getElementById('attention_question_2-4').checked == false)){
		alert("Please answer the above question");
		return false;
	}else{
		document.getElementById("introduction_before_main_tasks").style.display="block";
		document.getElementById("tutorial").style.display="none";
	}
});




// 从tutorial2的 step1 跳转到 step2和3
$("#tutorial_moveto_step23").click(function(){

	var objData1 = $("#tutorial_first").serializeArray();

	console.log(objData1);

	
	//console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('tutorial-first-decision-1').checked == false && document.getElementById('tutorial-first-decision-2').checked == false && document.getElementById('tutorial-first-decision-3').checked == false
	&& document.getElementById('tutorial-first-decision-4').checked == false && document.getElementById('tutorial-first-decision-5').checked == false){
		alert("Please make your prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if (document.getElementById('tutorial-first-decision-1').checked == true || document.getElementById('tutorial-first-decision-2').checked == true || document.getElementById('tutorial-first-decision-3').checked == true
	|| document.getElementById('tutorial-first-decision-4').checked == true || document.getElementById('tutorial-first-decision-5').checked == true) {


		$("html, body").animate({ scrollTop: 0 }, "slow");

		document.getElementById("tutorial_firstdecision").style.display="none";
		document.getElementById("tutorial_pager_region1").style.display="none";


		
		document.getElementById("tutorial_aisuggestion").style.display="block";
		document.getElementById("tutorial_finaldecision").style.display="block";
		document.getElementById("attention_check").style.display="block";
		document.getElementById("tutorial_pager_region2").style.display="block";
		document.getElementById("youcanmoveon").style.display="block";
		

		//先假设是0哈
		ai_pred = 0;


		firstdecision_1 = objData1[0];
		human_pred = firstdecision_1['value'];


		// var human_tab = "tutorial_tab" + (parseInt(human_pred)+1);

		// 把用户选择的那个一tab 绘制上用户icon
		// document.getElementById(human_tab).innerHTML = option_list[human_pred] + " <i class=\"fa-solid fa-user-check\"></i>";
		
		document.getElementById("tutorial_human_initialprediction").innerHTML = "Your prediction: <b>" + option_list[human_pred] + "</b>";


		if(ai_pred == 0){

			document.getElementById("tutorial_tab2").style.pointerEvents = "none";
			document.getElementById("tutorial_tab3").style.pointerEvents = "none";
			document.getElementById("tutorial_tab4").style.pointerEvents = "none";
			document.getElementById("tutorial_tab5").style.pointerEvents = "none";

			document.getElementById("tutorial_tab2").style.color = "#e6dede";
			document.getElementById("tutorial_tab3").style.color = "#e6dede";
			document.getElementById("tutorial_tab4").style.color = "#e6dede";
			document.getElementById("tutorial_tab5").style.color = "#e6dede";

			document.getElementById("tutorial_tab2").className = "";
			document.getElementById("tutorial_tab3").className = "";
			document.getElementById("tutorial_tab4").className = "";
			document.getElementById("tutorial_tab5").className = "";



			
			document.getElementById("tutorial_tab1").className = "active";
			document.getElementById("tutorial_highlight_1").style.display = "block";




			document.getElementById("tutorial_ai_sug_region").innerHTML = "AI's suggestion: <b>BUSINESS</b>";
		}
		else if(ai_pred == 1){

			document.getElementById("tutorial_tab1").style.pointerEvents = "none";
			document.getElementById("tutorial_tab3").style.pointerEvents = "none";
			document.getElementById("tutorial_tab4").style.pointerEvents = "none";
			document.getElementById("tutorial_tab5").style.pointerEvents = "none";

			document.getElementById("tutorial_tab1").style.color = "#e6dede";
			document.getElementById("tutorial_tab3").style.color = "#e6dede";
			document.getElementById("tutorial_tab4").style.color = "#e6dede";
			document.getElementById("tutorial_tab5").style.color = "#e6dede";

			document.getElementById("tutorial_tab1").className = "";
			document.getElementById("tutorial_tab3").className = "";
			document.getElementById("tutorial_tab4").className = "";
			document.getElementById("tutorial_tab5").className = "";

			document.getElementById("tutorial_tab2").className = "active";
			document.getElementById("tutorial_highlight_2").style.display = "block";


			document.getElementById("tutorial_tutorial_ai_sug_region").innerHTML = "AI's suggestion: <b>ENTERTAINMENT</b>";
		}
		else if(ai_pred == 2){

			document.getElementById("tutorial_tab1").style.pointerEvents = "none";
			document.getElementById("tutorial_tab2").style.pointerEvents = "none";
			document.getElementById("tutorial_tab4").style.pointerEvents = "none";
			document.getElementById("tutorial_tab5").style.pointerEvents = "none";

			document.getElementById("tutorial_tab1").style.color = "#e6dede";
			document.getElementById("tutorial_tab2").style.color = "#e6dede";
			document.getElementById("tutorial_tab4").style.color = "#e6dede";
			document.getElementById("tutorial_tab5").style.color = "#e6dede";

			document.getElementById("tutorial_tab1").className = "";
			document.getElementById("tutorial_tab2").className = "";
			document.getElementById("tutorial_tab4").className = "";
			document.getElementById("tutorial_tab5").className = "";


			document.getElementById("tutorial_tab3").className = "active";
			document.getElementById("tutorial_highlight_3").style.display = "block";


			document.getElementById("tutorial_tutorial_ai_sug_region").innerHTML = "AI's suggestion: <b>HEALTHY LIVING</b>";
		}
		else if(ai_pred == 3){

			document.getElementById("tutorial_tab1").style.pointerEvents = "none";
			document.getElementById("tutorial_tab2").style.pointerEvents = "none";
			document.getElementById("tutorial_tab3").style.pointerEvents = "none";
			document.getElementById("tutorial_tab5").style.pointerEvents = "none";

			document.getElementById("tutorial_tab1").style.color = "#e6dede";
			document.getElementById("tutorial_tab2").style.color = "#e6dede";
			document.getElementById("tutorial_tab3").style.color = "#e6dede";
			document.getElementById("tutorial_tab5").style.color = "#e6dede";

			
			document.getElementById("tutorial_tab1").className = "";
			document.getElementById("tutorial_tab2").className = "";
			document.getElementById("tutorial_tab3").className = "";
			document.getElementById("tutorial_tab5").className = "";

			document.getElementById("tutorial_tab4").className = "active";
			document.getElementById("tutorial_highlight_4").style.display = "block";


			document.getElementById("tutorial_ai_sug_region").innerHTML = "AI's suggestion: <b>POLITICS</b>";
		}
		else if(ai_pred == 4){

			document.getElementById("tutorial_tab1").style.pointerEvents = "none";
			document.getElementById("tutorial_tab2").style.pointerEvents = "none";
			document.getElementById("tutorial_tab3").style.pointerEvents = "none";
			document.getElementById("tutorial_tab4").style.pointerEvents = "none";

			document.getElementById("tutorial_tab1").style.color = "#e6dede";
			document.getElementById("tutorial_tab2").style.color = "#e6dede";
			document.getElementById("tutorial_tab3").style.color = "#e6dede";
			document.getElementById("tutorial_tab4").style.color = "#e6dede";


			document.getElementById("tutorial_tab1").className = "";
			document.getElementById("tutorial_tab2").className = "";
			document.getElementById("tutorial_tab3").className = "";
			document.getElementById("tutorial_tab4").className = "";


			document.getElementById("tutorial_tab5").className = "active";
			document.getElementById("tutorial_highlight_5").style.display = "block";


			document.getElementById("tutorial_ai_sug_region").innerHTML = "AI's suggestion: <b>TECHNOLOGY</b>";
		}

		// document.getElementById(human_tab).style.color = "#000000";

	}


});



$("#start_actual_tasks").click(function(){

	document.getElementById("introduction_before_main_tasks").style.display="none";

		
	timestamp1 = new Date().getTime(); //1610075969354 


	var attentionData1 = $("#firstcheck").serializeArray();
	var attentionData2 = $("#secondcheck").serializeArray();
	
	
	attention_check_useranswer.push([attentionData1[0].value, attentionData2[0].value]);

	$(".nav-tabs a[href='#NLP_task']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("category-text-content").innerHTML = text_content[order_list[AIRoles_index]];
	document.getElementById('the-index').textContent = AIRoles_index + 1 + '/' + order_list.length;
			
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

		
		current_instance_data = [AIRoles_index, order_list[AIRoles_index], firstdecision_1, seconddecision_1, secondconfidence_1, ai_pred, ground_truth_1, time_spent];

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


		//清除当前页的log
		user_interaction_log_thispape = [];

		$("html, body").animate({ scrollTop: 0 }, "slow");



		// 把用户选择的那个tab复原成只有文字的样子
		// document.getElementById("tab" + (parseInt(human_pred)+1)).innerHTML = option_list[human_pred];

	}
});



function changeBackg(thetext, feature_list, color_list){
	var result;
	result = thetext;
	var newword;
	for(var i = 0; i < feature_list.length; i++){
		newword = '<font style=\"background: '+color_list[i]+'\">'+feature_list[i]+'</font>';
		var toreplace = new RegExp('\\b' + feature_list[i]+ '\\b', "gi");
		result = result.replace(toreplace, newword);
	}
	return result;
}


function getColorList(grdtru, importance_list){
	var maxpos = Math.max.apply(null,importance_list);
	var minneg = Math.min.apply(null,importance_list);
	var color_list = []
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#628FAB');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#7196AC');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#628FAB');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#FFD2B9');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#FDC3A5');
			else
				color_list.push('#FCB795');
		}

	return color_list;
}



function updateCharts(){


	// =============================================



	// 第一个选项卡，Business
	var importance_business1 = parseFloat(importance_business[order_list[AIRoles_index]][0]);
	var importance_business2 = parseFloat(importance_business[order_list[AIRoles_index]][1]);
	var importance_business3 = parseFloat(importance_business[order_list[AIRoles_index]][2]);
	var importance_business4 = parseFloat(importance_business[order_list[AIRoles_index]][3]);
	var importance_business5 = parseFloat(importance_business[order_list[AIRoles_index]][4]);
	var importance_business6 = parseFloat(importance_business[order_list[AIRoles_index]][5]);
	var importance_business7 = parseFloat(importance_business[order_list[AIRoles_index]][6]);
	var importance_business8 = parseFloat(importance_business[order_list[AIRoles_index]][7]);
	var importance_business9 = parseFloat(importance_business[order_list[AIRoles_index]][8]);
	var importance_business10 = parseFloat(importance_business[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	importance_business_vector = [importance_business1, importance_business2, importance_business3, importance_business4, importance_business5, importance_business6, importance_business7, importance_business8, importance_business9, importance_business10];

	importance_business_pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_business_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < importance_business_vector.length; i++){
		if (importance_business_vector[i] > 0){
			importance_business_pos[i] = importance_business_vector[i];
		}
		else{
			importance_business_neg[i] = importance_business_vector[i];
		}
	}




	categories1 = features_business[order_list[AIRoles_index]];
	chart_business.update({
		xAxis: {
			categories: categories1,
		}, 
		series: [{
			data: importance_business_neg,
		}, {
			data: importance_business_pos,
		}]
	});


	// =============================================


	// 第二个选项卡，Entertainment
	var importance_entertainment1 = parseFloat(importance_entertainment[order_list[AIRoles_index]][0]);
	var importance_entertainment2 = parseFloat(importance_entertainment[order_list[AIRoles_index]][1]);
	var importance_entertainment3 = parseFloat(importance_entertainment[order_list[AIRoles_index]][2]);
	var importance_entertainment4 = parseFloat(importance_entertainment[order_list[AIRoles_index]][3]);
	var importance_entertainment5 = parseFloat(importance_entertainment[order_list[AIRoles_index]][4]);
	var importance_entertainment6 = parseFloat(importance_entertainment[order_list[AIRoles_index]][5]);
	var importance_entertainment7 = parseFloat(importance_entertainment[order_list[AIRoles_index]][6]);
	var importance_entertainment8 = parseFloat(importance_entertainment[order_list[AIRoles_index]][7]);
	var importance_entertainment9 = parseFloat(importance_entertainment[order_list[AIRoles_index]][8]);
	var importance_entertainment10 = parseFloat(importance_entertainment[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	importance_entertainment_vector = [importance_entertainment1, importance_entertainment2, importance_entertainment3, importance_entertainment4, importance_entertainment5, importance_entertainment6, importance_entertainment7, importance_entertainment8, importance_entertainment9, importance_entertainment10];



	importance_entertainment_pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_entertainment_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < importance_entertainment_vector.length; i++){
		if (importance_entertainment_vector[i] > 0){
			importance_entertainment_pos[i] = importance_entertainment_vector[i];
		}
		else{
			importance_entertainment_neg[i] = importance_entertainment_vector[i];
		}
	}



	categories2 = features_entertainment[order_list[AIRoles_index]];
	chart_entertainment.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg,
		}, {
			data: importance_entertainment_pos,
		}]
	});


	// =============================================
	

	// 第三个选项卡，Healthy
	var importance_healthy1 = parseFloat(importance_healthy[order_list[AIRoles_index]][0]);
	var importance_healthy2 = parseFloat(importance_healthy[order_list[AIRoles_index]][1]);
	var importance_healthy3 = parseFloat(importance_healthy[order_list[AIRoles_index]][2]);
	var importance_healthy4 = parseFloat(importance_healthy[order_list[AIRoles_index]][3]);
	var importance_healthy5 = parseFloat(importance_healthy[order_list[AIRoles_index]][4]);
	var importance_healthy6 = parseFloat(importance_healthy[order_list[AIRoles_index]][5]);
	var importance_healthy7 = parseFloat(importance_healthy[order_list[AIRoles_index]][6]);
	var importance_healthy8 = parseFloat(importance_healthy[order_list[AIRoles_index]][7]);
	var importance_healthy9 = parseFloat(importance_healthy[order_list[AIRoles_index]][8]);
	var importance_healthy10 = parseFloat(importance_healthy[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	importance_healthy_vector = [importance_healthy1, importance_healthy2, importance_healthy3, importance_healthy4, importance_healthy5, importance_healthy6, importance_healthy7, importance_healthy8, importance_healthy9, importance_healthy10];



	importance_healthy_pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_healthy_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < importance_healthy_vector.length; i++){
		if (importance_healthy_vector[i] > 0){
			importance_healthy_pos[i] = importance_healthy_vector[i];
		}
		else{
			importance_healthy_neg[i] = importance_healthy_vector[i];
		}
	}


	categories3 = features_healthy[order_list[AIRoles_index]];
	chart_health.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg,
		}, {
			data: importance_healthy_pos,
		}]
	});
	


	// =============================================


	// 第四个选项卡，Politics
	var importance_politics1 = parseFloat(importance_politics[order_list[AIRoles_index]][0]);
	var importance_politics2 = parseFloat(importance_politics[order_list[AIRoles_index]][1]);
	var importance_politics3 = parseFloat(importance_politics[order_list[AIRoles_index]][2]);
	var importance_politics4 = parseFloat(importance_politics[order_list[AIRoles_index]][3]);
	var importance_politics5 = parseFloat(importance_politics[order_list[AIRoles_index]][4]);
	var importance_politics6 = parseFloat(importance_politics[order_list[AIRoles_index]][5]);
	var importance_politics7 = parseFloat(importance_politics[order_list[AIRoles_index]][6]);
	var importance_politics8 = parseFloat(importance_politics[order_list[AIRoles_index]][7]);
	var importance_politics9 = parseFloat(importance_politics[order_list[AIRoles_index]][8]);
	var importance_politics10 = parseFloat(importance_politics[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	importance_politics_vector = [importance_politics1, importance_politics2, importance_politics3, importance_politics4, importance_politics5, importance_politics6, importance_politics7, importance_politics8, importance_politics9, importance_politics10];


	importance_politics_pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_politics_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < importance_politics_vector.length; i++){
		if (importance_politics_vector[i] > 0){
			importance_politics_pos[i] = importance_politics_vector[i];
		}
		else{
			importance_politics_neg[i] = importance_politics_vector[i];
		}
	}

	categories4 = features_politics[order_list[AIRoles_index]];
	chart_politics.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg,
		}, {
			data: importance_politics_pos,
		}]
	});
	

	// =============================================


	// 第五个选项卡，Politics
	var importance_tech1 = parseFloat(importance_tech[order_list[AIRoles_index]][0]);
	var importance_tech2 = parseFloat(importance_tech[order_list[AIRoles_index]][1]);
	var importance_tech3 = parseFloat(importance_tech[order_list[AIRoles_index]][2]);
	var importance_tech4 = parseFloat(importance_tech[order_list[AIRoles_index]][3]);
	var importance_tech5 = parseFloat(importance_tech[order_list[AIRoles_index]][4]);
	var importance_tech6 = parseFloat(importance_tech[order_list[AIRoles_index]][5]);
	var importance_tech7 = parseFloat(importance_tech[order_list[AIRoles_index]][6]);
	var importance_tech8 = parseFloat(importance_tech[order_list[AIRoles_index]][7]);
	var importance_tech9 = parseFloat(importance_tech[order_list[AIRoles_index]][8]);
	var importance_tech10 = parseFloat(importance_tech[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	importance_tech_vector = [importance_tech1, importance_tech2, importance_tech3, importance_tech4, importance_tech5, importance_tech6, importance_tech7, importance_tech8, importance_tech9, importance_tech10];




	importance_tech_pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_tech_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < importance_tech_vector.length; i++){
		if (importance_tech_vector[i] > 0){
			importance_tech_pos[i] = importance_tech_vector[i];
		}
		else{
			importance_tech_neg[i] = importance_tech_vector[i];
		}
	}

	categories5 = features_tech[order_list[AIRoles_index]];
	chart_technology.update({
		xAxis: {
			categories: categories5,
		}, 
		series: [{
			data: importance_tech_neg,
		}, {
			data: importance_tech_pos,
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

		// 取5个output中第一位（最大概率）作为AI的预测
		ai_pred = ai_prediction[order_list[AIRoles_index]][0];

		firstdecision_1 = objData1[0];

		human_pred = firstdecision_1['value'];

		// var human_tab = "tab" + (parseInt(human_pred)+1);

		// 把用户选择的那个一tab 绘制上用户icon
		// document.getElementById(human_tab).innerHTML = option_list[human_pred] + " <i class=\"fa-solid fa-user-check\"></i>";
		document.getElementById("human_initialprediction").innerHTML = "Your prediction: <b>" + option_list[human_pred] + "</b>";


		updateCharts();
		document.getElementById("next-task-btn").style.display="block";	


		document.getElementById("suggestion1-text-BUSINESS").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-HEALTHY").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-POLITICS").innerHTML=text_content[order_list[AIRoles_index]];
		document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML=text_content[order_list[AIRoles_index]];


		
		context_before_replace = document.getElementById("suggestion1-text-BUSINESS").innerHTML;




		if(ai_pred == 0){
			var feature_list = features_business[order_list[AIRoles_index]];
			var importance_list = importance_business[order_list[AIRoles_index]];
			var color_list = getColorList(0, importance_list)
			document.getElementById("suggestion1-text-BUSINESS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);


			document.getElementById("tab2").style.pointerEvents = "none";
			document.getElementById("tab3").style.pointerEvents = "none";
			document.getElementById("tab4").style.pointerEvents = "none";
			document.getElementById("tab5").style.pointerEvents = "none";

			document.getElementById("tab2").style.color = "#e6dede";
			document.getElementById("tab3").style.color = "#e6dede";
			document.getElementById("tab4").style.color = "#e6dede";
			document.getElementById("tab5").style.color = "#e6dede";

			document.getElementById("tab2").className = "";
			document.getElementById("tab3").className = "";
			document.getElementById("tab4").className = "";
			document.getElementById("tab5").className = "";



			
			document.getElementById("tab1").className = "active";
			document.getElementById("highlight_1").style.display = "block";




			document.getElementById("ai_sug_region").innerHTML = "AI's suggestion: <b>BUSINESS</b>";
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

			document.getElementById("tab1").style.color = "#e6dede";
			document.getElementById("tab3").style.color = "#e6dede";
			document.getElementById("tab4").style.color = "#e6dede";
			document.getElementById("tab5").style.color = "#e6dede";

			document.getElementById("tab1").className = "";
			document.getElementById("tab3").className = "";
			document.getElementById("tab4").className = "";
			document.getElementById("tab5").className = "";

			document.getElementById("tab2").className = "active";
			document.getElementById("highlight_2").style.display = "block";


			document.getElementById("ai_sug_region").innerHTML = "AI's suggestion: <b>ENTERTAINMENT</b>";
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

			document.getElementById("tab1").style.color = "#e6dede";
			document.getElementById("tab2").style.color = "#e6dede";
			document.getElementById("tab4").style.color = "#e6dede";
			document.getElementById("tab5").style.color = "#e6dede";

			document.getElementById("tab1").className = "";
			document.getElementById("tab2").className = "";
			document.getElementById("tab4").className = "";
			document.getElementById("tab5").className = "";


			document.getElementById("tab3").className = "active";
			document.getElementById("highlight_3").style.display = "block";


			document.getElementById("ai_sug_region").innerHTML = "AI's suggestion: <b>HEALTHY LIVING</b>";
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

			document.getElementById("tab1").style.color = "#e6dede";
			document.getElementById("tab2").style.color = "#e6dede";
			document.getElementById("tab3").style.color = "#e6dede";
			document.getElementById("tab5").style.color = "#e6dede";

			
			document.getElementById("tab1").className = "";
			document.getElementById("tab2").className = "";
			document.getElementById("tab3").className = "";
			document.getElementById("tab5").className = "";

			document.getElementById("tab4").className = "active";
			document.getElementById("highlight_4").style.display = "block";


			document.getElementById("ai_sug_region").innerHTML = "AI's suggestion: <b>POLITICS</b>";
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

			document.getElementById("tab1").style.color = "#e6dede";
			document.getElementById("tab2").style.color = "#e6dede";
			document.getElementById("tab3").style.color = "#e6dede";
			document.getElementById("tab4").style.color = "#e6dede";


			document.getElementById("tab1").className = "";
			document.getElementById("tab2").className = "";
			document.getElementById("tab3").className = "";
			document.getElementById("tab4").className = "";


			document.getElementById("tab5").className = "active";
			document.getElementById("highlight_5").style.display = "block";


			document.getElementById("ai_sug_region").innerHTML = "AI's suggestion: <b>TECHNOLOGY</b>";
		}


		$(".nav-tabs a[href='#AI_suggestion1']").tab('show');
		$("html, body").animate({ scrollTop: 0 }, "slow");



		// document.getElementById(human_tab).style.color = "#000000";

		// 把选项框清零

		document.getElementById('radio-first-decision-1').checked = false;
		document.getElementById('radio-first-decision-2').checked = false;
		document.getElementById('radio-first-decision-3').checked = false;
		document.getElementById('radio-first-decision-4').checked = false;
		document.getElementById('radio-first-decision-5').checked = false;

	}

});







$("#go_to_questionnaire").click(function(){
	document.getElementById("go_to_questionnaire").style.display = "none";
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("go_to_questionnaire2").style.display = "block";
});


var attention_tocheck = false;





$("#go_to_next").click(function(){

	var objData = $("#post-task-questionnaire2").serializeArray();
	console.log(objData);

	// document.getElementById("go_to_questionnaire2").style.display="none";

	if(!checkIterationFormInfo2(objData)){
		return;
	}
	else{
		questionnaire_data2 = objData;
	}

	
	document.getElementById("question_area2").style.display = "none";


	$("#finishModal").modal('show');
	submitData_ms();


});


$("#exit_button").click(function(){
	document.getElementById("go_to_next").textContent = "Finished";
	document.getElementById("go_to_next").disabled = true;
});


//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 24) {
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



//must input personal info
function checkIterationFormInfo2(objData){
	
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

		"condition": 'Traditional_News',

		"prolific_id": prolific_id,

		"user_info": userinfo,

		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"questionnaire_data2": questionnaire_data2,

		"simple_attention_check": attention_check_useranswer,
		
		"tab_click_times": [tab1_clickTimes, tab2_clickTimes, tab3_clickTimes, tab4_clickTimes, tab5_clickTimes]
	}
	
	var dataJson = JSON.stringify(userinfo_alldata);
	xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	// var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, user_id + ".json");
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



$("#go_to_questionnaire2").click(function(){



	


	var objData = $("#post-task-questionnaire").serializeArray();
	console.log(objData);

	// document.getElementById("go_to_questionnaire").style.display="none";

	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		questionnaire_data = objData;
	}


	document.getElementById("go_to_questionnaire2").style.display = "none";

	$(".nav-tabs a[href='#questionnaire2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("go_to_next").style.display = "block";


});