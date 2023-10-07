const mangaData = [
  {
    id: 1,
    title: "Tokyo Ghoul",
    image:
      "https://prodimage.images-bn.com/pimages/9781421580425_p0_v1_s192x300.jpg",
    price: 9.99,
    description:
      "Lurking within the shadows of Tokyo are frightening beings known as 'ghouls,' who satisfy their hunger by feeding on humans once night falls. An organization known as the Commission of Counter Ghoul (CCG) has been established in response to the constant attacks on citizens and as a means of purging these creatures.\n\nHowever, the problem lies in identifying ghouls as they disguise themselves as humans, living amongst the masses so that hunting prey will be easier. Ken Kaneki, an unsuspecting university freshman, finds himself caught in a world between humans and ghouls when his date turns out to be a ghoul after his flesh.\n\nBarely surviving this encounter after being taken to a hospital, he discovers that he has turned into a half-ghoul as a result of the surgery he received. Unable to satisfy his intense craving for human meat through conventional means, Kaneki is taken in by friendly ghouls who run a coffee shop in order to help him with his transition.\n\nAs he begins what he thinks will be a peaceful new life, little does he know that he is about to find himself at the center of a war between his new comrades and the forces of the CCG, and that his new existence has caught the attention of ghouls all over Tokyo.",
    rate: 4,
    category: "seinen",
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://m.media-amazon.com/images/I/71kvo+fijnL.jpg",
    price: 9.99,
    description:
      "Gol D. Roger, a man referred to as the 'King of the Pirates,' is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins.Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. \n\nArmed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.",
    rate: 4.9,
    category: "shonen",
  },
  {
    id: 3,
    title: "Naruto",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    price: 8.99,
    description:
      "Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. \n\nBut their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto.And so when he is assigned to Team 7—along with his new teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of veteran ninja Kakashi Hatake—Naruto is forced to work together with other people for the first time in his life. \n\nThrough undergoing vigorous training and taking on challenging missions, Naruto must learn what it means to work in a team and carve his own route toward becoming a full-fledged ninja recognized by his village.",
    rate: 4,
    category: "shonen",
  },
  {
    id: 4,
    title: "Attack on Titan",
    image: "https://m.media-amazon.com/images/I/91M9VaZWxOL.jpg",
    price: 12.99,
    description:
      "Hundreds of years ago, horrifying creatures which resembled humans appeared. These mindless, towering giants, called 'Titans,' proved to be an existential threat, as they preyed on whatever humans they could find in order to satisfy a seemingly unending appetite. \n\nUnable to effectively combat the Titans, mankind was forced to barricade themselves within large walls surrounding what may very well be humanity's last safe haven in the world.In the present day, life within the walls has finally found peace, since the residents have not dealt with Titans for many years. Eren Yeager, Mikasa Ackerman, and Armin Arlert are three young children who dream of experiencing all that the world has to offer, having grown up hearing stories of the wonders beyond the walls. \n\nBut when the state of tranquility is suddenly shattered by the attack of a massive 60-meter Titan, they quickly learn just how cruel the world can be. On that day, Eren makes a promise to himself that he will do whatever it takes to eradicate every single Titan off the face of the Earth, with the hope that one day, humanity will once again be able to live outside the walls without fear.",
    rate: 4,
    category: "seinen",
  },
  {
    id: 5,
    title: "Bleach",
    image:
      "https://www.rightstufanime.com/images/productImages/9781421516035_manga-Bleach-Graphic-Novel-24-primary.jpg?resizeid=3&resizeh=600&resizew=600",
    price: 10.99,
    description:
      "For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. \n\nAs Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow.Now a Soul Reaper himself, Ichigo must take up Rukia's duties of exterminating Hollows and protecting spirits, both living and dead. \n\nAlong with his friends Orihime Inoue and Yasutora Sado—who later discover spiritual abilities of their own—Ichigo soon learns that the consequences of becoming a Soul Reaper and dealing with the world of spirits are far greater than he ever imagined.",
    rate: 3.5,
    category: "shonen",
  },
  {
    id: 6,
    title: "Death Note",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/220px-Death_Note_Vol_1.jpg",
    price: 9.49,
    description:
      "Ryuk, a god of death, drops his Death Note into the human world for personal pleasure. In Japan, prodigious high school student Light Yagami stumbles upon it. Inside the notebook, he finds a chilling message: those whose names are written in it shall die. Its nonsensical nature amuses Light; but when he tests its power by writing the name of a criminal in it, they suddenly meet their demise.Realizing the Death Note's vast potential, Light commences a series of nefarious murders under the pseudonym 'Kira,' vowing to cleanse the world of corrupt individuals and create a perfect society where crime ceases to exist. \n\nHowever, the police quickly catch on, and they enlist the help of L—a mastermind detective—to uncover the culprit.Death Note tells the thrilling tale of Light and L as they clash in a great battle-of-minds, one that will determine the future of the world.",
    rate: 4.7,
    category: "shonen",
  },
  {
    id: 7,
    title: "FullMetal Alchemist",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/4079417-01.jpg",
    price: 11.99,
    description:
      "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. \n\nUnfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor.Years later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine.",
    rate: 4.9,
    category: "shonen",
  },
  {
    id: 8,
    title: "Sword Art Online",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/4421543-01.jpg",
    price: 13.99,
    description:
      "In the year 2022, gamers rejoice as Sword Art Online-a VRMMORPG (Virtual Reality Massively Multiplayer Online Role Playing Game) like no other-opens its virtual doors, allowing players to take full advantage of the ultimate in gaming technology: NerveGear, a system that allows users to completely immerse themselves in the game world by manipulating their brain waves to create a wholly realistic gaming experience. But when the game goes live, the elation of the players quickly turns to horror as they discover that, for all its amazing features, SAO is missing one of the most basic functions of any MMORPG-a log-out button. Now trapped in the virtual world of Aincrad, their bodies held captive by NerveGear in the real world, users are issued a chilling ultimatum: conquer all one hundred floors of Aincrad to regain your freedom. But in the warped world of SAO, 'game over' means certain death-both virtual and real...",
    rate: 4.2,
    category: "shonen",
  },
  {
    id: 9,
    title: "Black Clover",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg",
    price: 9.79,
    description:
      "In a world full of magic, Asta—an orphan who is overly loud and energetic—possesses none whatsoever. Despite this, he dreams of becoming the Wizard King, a title bestowed upon the strongest mage in the Clover Kingdom. Possessing the same aspiration, Asta's childhood friend and rival Yuno has been blessed with the ability to control powerful wind magic. Even with this overwhelming gap between them, hoping to somehow awaken his magical abilities and catch up to Yuno, Asta trains his body relentlessly every day.\n\nIn the Clover Kingdom, once a person turns 15 years old, it is time for them to receive their Grimoire, an item allowing its wielder to use their magic to its full capacity. At the ceremony, Yuno obtains a Grimoire with a legendary four-leaf clover, indicating the exceptional strength of its wielder, while Asta pointlessly waits for his. Feeling dejected, yet unwilling to give up, Asta sees Yuno caught by a mage who is trying to steal Yuno's special Grimoire. Despite being completely overpowered by Yuno's captor, Asta's will to keep fighting rewards him with his very own Grimoire—one with an unheard-of black five-leaf clover.",
    rate: 3,
    category: "shonen",
  },
  {
    id: 10,
    title: "My Hero Academia",
    image: "https://m.media-amazon.com/images/I/51FAgOL-1bL.jpg",
    price: 11.99,
    description:
      "One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as 'quirks,' which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. \n\nYet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High.However, everything changes after a chance meeting with the number one hero and Izuku's idol, All Might. Discovering that his dream is not a dead end, the powerless boy undergoes special training, working harder than ever before. \n\nEventually, this leads to him inheriting All Might's power, and with his newfound abilities, gets into his school of choice, beginning his grueling journey to become the successor of the best hero on the planet.",
    rate: 4,
    category: "shonen",
  },
  {
    id: 11,
    title: "Dragon Ball",
    image: "https://m.media-amazon.com/images/I/71u0UjsSrnL.jpg",
    price: 8.99,
    description:
      "Bulma, a headstrong 16-year-old girl, is on a quest to find the mythical Dragon Balls—seven scattered magic orbs that grant the finder a single wish. She has but one desire in mind: a perfect boyfriend. On her journey, Bulma stumbles upon Gokuu Son, a powerful orphan who has only ever known one human besides her. Gokuu possesses one of the Dragon Balls, it being a memento from his late grandfather. In exchange for it, Bulma invites Gokuu to be a companion in her travels.\n\nBy Bulma's side, Gokuu discovers a world completely alien to him. Powerful enemies embark on their own pursuits of the Dragon Balls, pushing Gokuu beyond his limits in order to protect Bulma and their growing circle of allies. However, Gokuu has secrets unbeknownst to even himself; the incredible strength within him stems from a mysterious source, one that threatens the many people he grows to hold dear.\n\nAs his prowess in martial arts flourishes, Gokuu attracts stronger opponents whose villainous plans could collapse beneath his might. He undertakes the endless venture of combat training to defend his loved ones and the fate of the planet itself.",
    rate: 5,
    category: "shonen",
  },
  {
    id: 12,
    title: "One Punch Man",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png",
    price: 10.99,
    description:
      "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.\n\nUpon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.",
    rate: 4.7,
    category: "shonen",
  },
  {
    id: 13,
    title: "Hunter x Hunter",
    image: "https://m.media-amazon.com/images/I/815uHbvvu1L.jpg",
    price: 11.99,
    description:
      "'Secret treasure hoards, undiscovered wealth... mystical places, unexplored frontiers... 'The mysterious unknown.' There's magic in such words for those captivated by its spell. They are called 'Hunters'!'\n\nGon Freecss wants to become a Hunter so he can find his father, a man who abandoned him to pursue a life of adventure. But it's not that simple: only one in one hundred thousand can pass the Hunter Exam, and that is just the first obstacle on his journey. During the Hunter Exam, Gon befriends many other potential Hunters, such as the mysterious Killua; the revenge-driven Kurapika; and Leorio, who aims to become a doctor. There's a world of adventure and peril awaiting, and those who embrace it with open arms can become the greatest Hunters of them all!",
    rate: 4.8,
    category: "shonen",
  },
  {
    id: 14,
    title: "Fairy Tail",
    image: "https://cv.bkmkn.kodansha.co.jp/9784063844160/9784063844160_w.jpg",
    price: 9.99,
    description:
      "In the mystical realm of Earth Land, magic exists at the core of everyday life for its inhabitants, from transportation to utilities and everything in between. However, even with all its benefits, magic can also be used for great evil; therefore, to prevent dark forces from upsetting the natural order of things, there exists a system of magical guilds in the Kingdom of Fiore. \n\nUnder the command of their respective guild masters, these guilds are made up of witches and wizards who take on various job requests to earn fame and fortune. One particular guild stands high above the rest in both strength and spirit, and its name is Fairy Tail.In his quest to find his dragon foster father—Igneel—Natsu Dragneel, a fiery and reckless mage, and his partner Happy run into a young celestial mage by the name of Lucy Heartfilia, who reveals that it's her dream to become a full-fledged wizard and join the Fairy Tail guild. \n\nAfter rescuing her from an abduction attempt, Natsu offers her a home in Fairy Tail. Now a member of the guild, Lucy teams up with Natsu and befriends fellow wizards Gray Fullbuster and Erza 'Titania' Scarlet. Together, this motley crew set out on their many adventures, gaining many faithful allies and deadly foes along the way.",
    rate: 3.8,
    category: "shonen",
  },
  {
    id: 15,
    title: "JoJo's Bizarre Adventure Part 5",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1974724131/1.jpg?width=810&maxHeight=810&quality=85",
    price: 12.99,
    description:
      "Naples, 2001. Giorno Giovanna is a small-time crook with one big dream—to become a 'Gang-Star.' No ordinary thief, Giorno has a connection to the remarkable Joestar bloodline, and possesses a Stand named Gold Experience. His dream starts to become reality when he meets Bruno Bucciarati, a mobster from the gang Passione and a fellow Stand user himself. Realizing that they share similar ideals, and both disagree with the gang's harmful affairs, Giorno reveals his goal to Bruno: with Bruno's help, he will reform Passione by overthrowing the boss.\n\nAs Giorno becomes a member of Passione, and is inducted into Bruno's squad, he discovers that it is no simple gang; its numbers are teeming with Stand users. Now confronted by other squads of differing loyalties and unpredictable caliber, their goal to change the gang from the inside out will be a tough one. Taking on these adversaries, Giorno attempts to rise through the ranks and inch closer to the boss, a man who is shrouded in mystery.",
    rate: 4.3,
    category: "shonen",
  },
  {
    id: 16,
    title: "Boruto",
    image: "https://m.media-amazon.com/images/I/71vP+oDyYYL.jpg",
    price: 9.99,
    description:
      "Naruto Uzumaki has finally achieved his dream of becoming Hokage, the leader of the Hidden Leaf Village that he spent his teenage years fighting to protect. Naruto and his peers now live in a world of peace, working hard to uphold an international truce built on good will and diplomacy.\n\nHowever, this stasis comes at a personal cost for the aging hero. Naruto and the shinobi he grew up alongside find that working to upkeep the neutral world takes them away from their families, and even the legendary warriors of Naruto's generation must contend with being mediocre parents to their bitter children, including his own son Boruto.\n\nBoruto Uzumaki faces a world completely unlike that of his father, finding unique trouble in the distance between the two. Contending with a society that heaps an unbearable load of pressure on his shoulders over his status as the Hokage's son, Boruto carves his own path through the world, fighting to make a name for himself as evil forces threaten to shatter the peace his father helped create.",
    rate: 3,
    category: "shonen",
  },
  {
    id: 17,
    title: "The Promised Neverland",
    image: "https://neverland-animeusa.com/assets_2m/img/comic/img_cm07.jpg",
    price: 12.99,
    description:
      "At Grace Field House, life couldn't be better for the orphans! Though they have no parents, together with the other kids and a kind 'Mama' who cares for them, they form one big, happy family. No child is ever overlooked, especially since they are all adopted by the age of 12. \n\nTheir daily lives involve rigorous tests, but afterwards, they are allowed to play outside.There is only one rule they must obey: do not leave the orphanage. But one day, two top-scoring orphans, Emma and Norman, venture past the gate and unearth the harrowing secret behind their entire existence. Utilizing their quick-wittedness, the children must work together to somehow change their predetermined fate.",
    rate: 4.9,
    category: "shonen",
  },
  {
    id: 18,
    title: "Seven Deadly Sins",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Nanatsu_no_Taizai_Volume_1.png",
    price: 11.99,
    description:
      "In a world where injustice prevails, the Holy Knights of Britannia protect their homeland with their unparalleled magic and strength. Their most sought-after targets are 'The Seven Deadly Sins': a group of criminals once regarded as the strongest of Britannia's Holy Knights. Their supposed conspiracy to overthrow the Kingdom of Liones led to their defeat at the hands of the Holy Knights, but rumors persist that the seven infamous knights still live.\n\nTen years later, the Holy Knights ironically stage a coup d'état themselves and capture the King of Liones, installing themselves as the new rulers of the kingdom. Elizabeth Liones, the third princess of the kingdom, sets out on a journey to find the Seven Deadly Sins and request their aid when she stumbles upon a bar owned by Meliodas, the Dragon's Sin of Wrath and the former leader of the disgraced knights. The pair sets out to find Meliodas' old comrades, but will it be hope or despair that awaits them in their travels?",
    rate: 3.8,
    category: "shonen",
  },
  {
    id: 19,
    title: "Demon Slayer",
    image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg",
    price: 11.99,
    description:
      "Tanjirou Kamado lives with his impoverished family on a remote mountain. As the oldest sibling, he took upon the responsibility of ensuring his family's livelihood after the death of his father. On a cold winter day, he goes down to the local village in order to sell some charcoal. As dusk falls, he is forced to spend the night in the house of a curious man who cautions him of strange creatures that roam the night: malevolent demons who crave human flesh.\n\nWhen he finally makes his way home, Tanjirou's worst nightmare comes true. His entire family has been brutally slaughtered with the sole exception of his sister Nezuko, who has turned into a flesh-eating demon. Engulfed in hatred and despair, Tanjirou desperately tries to stop Nezuko from attacking other people, setting out on a journey to avenge his family and find a way to turn his beloved sister back into a human.",
    rate: 3.5,
    category: "shonen",
  },
  {
    id: 20,
    title: "SLAM DUNK",
    image: "http://st.cdjapan.co.jp/pictures/l/15/13/NEOBK-2262585.jpg",
    price: 19.99,
    description:
      "Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. However, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: 'I hate basketball' and 'I need a girlfriend.'\n\nHaruko Akagi, ignorant of Hanamichi's history of misbehavior, notices his immense height and unwittingly approaches him, asking whether or not he likes basketball. Overcome by the fact that a girl is speaking to him, the red-haired giant blurts out a yes despite his true feelings. At the gym, Haruko asks if he can do a slam dunk. Though a complete novice, Hanamachi palms the ball and makes the leap...but overshoots, slamming his head into the backboard. Amazed by his near-inhuman physical abilities, Haruko quickly notifies the school's basketball captain of his feat. With this, Hanamichi is unexpectedly thrust into a world of competition for a girl he barely knows, but he soon discovers that there is perhaps more to basketball than he once thought.",
    rate: 4.8,
    category: "shonen",
  },
  {
    id: 21,
    title: "Jujutsu Kaisen",
    image: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    price: 9.99,
    description:
      "Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as 'Curses' terrorize humanity from the shadows, and powerful humans known as 'Jujutsu' sorcerers use mystical arts to exterminate them. When high school student Yuuji Itadori finds a dried-up finger of the legendary Curse Sukuna Ryoumen, he suddenly finds himself joining this bloody conflict.Attacked by a Curse attracted to the finger's power, Yuuji makes a reckless decision to protect himself, gaining the power to combat Curses in the process but also unwittingly unleashing the malicious Sukuna into the world once more. \n\nThough Yuuji can control and confine Sukuna to his own body, the Jujutsu world classifies Yuuji as a dangerous, high-level Curse who must be exterminated.Detained and sentenced to death, Yuuji meets Satoru Gojou—a teacher at Jujutsu High School—who explains that despite his imminent execution, there is an alternative for him. Being a rare vessel to Sukuna, if Yuuji were to die, then Sukuna would perish too. Therefore, if Yuuji were to consume the many other remnants of Sukuna, then Yuuji's subsequent execution would truly eradicate the malicious demon. Taking up this chance to make the world safer and live his life for a little longer, Yuuji enrolls in Tokyo Prefectural Jujutsu High School, jumping headfirst into a harsh and unforgiving battlefield.",
    rate: 4.2,
    category: "seinen",
  },
  {
    id: 22,
    title: "Tokyo Revengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg",
    price: 10.98,
    description:
      "Takemichi Hanagaki's life is at an all-time low. Just when he thought it couldn't get worse, he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji Gang: a group of vicious criminals that has been disturbing society's peace for quite some time.\n\nWondering where it all went wrong, Takemichi suddenly finds himself traveling through time, ending up 12 years in the past—when he was still in a relationship with Hinata. Realizing he has a chance to save her, Takemichi resolves to infiltrate the Tokyo Manji Gang and climb the ranks in order to rewrite the future and save Hinata from her tragic fate.",
    rate: 4.3,
    category: "seinen",
  },
  {
    id: 23,
    title: "Gantz",
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/Gantz_vol._1.png",
    price: 9.99,
    description:
      "Lonely high school student Kei Kurono isolates himself out of a growing cynicism toward his fellow man and the cruelty they are capable of enacting. One day, while waiting to take the subway to school, Kei's classmate Masaru Katou leaps onto the tracks in an effort to save a drunk man. Driven by an uncharacteristic desire to rescue someone else, Kei follows Katou down into danger. While successful in saving him, the two boys are killed by the train.\n\nKei wakes up beside Katou in an apartment full of strangers and furnished by a giant black orb with a glass-like outer surface. After finding out that everyone in the room has recently died, words appear on the black ball tasking them with killing a strange creature. The ball equips Kei and the others with power suits and mysterious guns before sending them off to collect this bizarre bounty.\n\nAlthough Kei discovers the mission to be far more deadly than originally suspected, he manages to survive. He is teleported back to the apartment where he and the other survivors are rewarded point values according to their actions in battle by the black sphere, which a fellow survivor says is called 'Gantz.' Despite his death earlier that day, Kei is granted the ability to return to his daily life with one condition: he can be uprooted from his day at any time and summoned back to the apartment, where Gantz will task him and other recently deceased with the assassination of another target.\n\nWhile Katou dreads the inevitable return to Gantz, Kei finds himself living for the sole purpose of carrying out these missions. Thriving in the heat of battle and learning to care about himself and his comrades, Kei faces escalating monstrous threats that begin to bleed out into his normal life outside of Gantz.",
    rate: 3.9,
    category: "seinen",
  },
  {
    id: 24,
    title: "Fruits Basket",
    image:
      "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/2351/9788415108443.jpg",
    price: 9.99,
    description:
      "Tooru Honda is an orphan with nowhere to go but a tent in the woods, until the Souma family takes her in. However, the Souma family is no ordinary family, and they hide a grave secret: when they are hugged by someone of the opposite gender, they turn into animals from the Chinese zodiac!\n\nNow, Tooru must help Kyou and Yuki Souma hide their curse from their classmates, as well as her friends Arisa Uotani and Saki Hanajima. As she is drawn further into the mysterious world of the Soumas, she meets more of the family, forging friendships along the way.\n\nBut this curse has caused much suffering; it has broken many Soumas. Despite this, Tooru may just be able to heal their hearts and soothe their souls.",
    rate: 2,
    category: "shoujo",
  },
  {
    id: 25,
    title: "Rurouni Kenshin",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Rurouni_Kenshin_28.png",
    price: 9.99,
    description:
      "Ten years have passed since the end of Bakumatsu, an era of war that saw the uprising of citizens against the Tokugawa shogunate. The revolutionaries wanted to create a time of peace, and a thriving country free from oppression. The new age of Meiji has come, but peace has not yet been achieved. Swords are banned but people are still murdered in the streets. Orphans of war veterans are left with nowhere to go, while the government seems content to just line their pockets with money.\n\nOne wandering samurai, Kenshin Himura, still works to make sure the values he fought for are worth the lives spent to bring about the new era. Once known as Hitokiri Battousai, he was feared as the most ruthless killer of all the revolutionaries. Now haunted by guilt, Kenshin has sworn never to kill again in atonement for the lives he took, and he may never know peace until killing is a thing of the past.\n\nNow in the 11th year of Meiji, Kenshin stumbles upon Kaoru Kamiya, owner and head instructor of a small dojo being threatened to close its doors. The police force is powerless to stop the string of murders done in the name of her dojo by a man claiming to be the famous Battousai. Kenshin's wanderings pause for now as he joins Kaoru to clear both their names. But how long can he stay before his past catches up to him?",
    rate: 3.7,
    category: "shonen",
  },
  {
    id: 26,
    title: "Chobits",
    image:
      "https://m.media-amazon.com/images/I/91A2vKj1mrL._AC_UF700,800_QL80_.jpg",
    price: 9.99,
    description:
      "After enduring four years of high school, Hideki Motosuwa strives to get into the university of his choice by attending cram school in Tokyo. Concurrently, he works daily shifts at a bar to make ends meet, thus missing out on the world's latest invention—human-like computers called Persocoms. Longing for a persocom of his own, Hideki is met with a stroke of luck when he stumbles upon a cute abandoned persocom in a garbage pile.\n\nUpon finding the power button, Hideki finds his newfound robot to be faulty and only capable of uttering the word 'Chii'—which Hideki decides to name her after. Chii, however, is no ordinary persocom: capable of thinking and learning on her own, she is a legendary type of robot known as a 'Chobit.' Now, it is up to Hideki to teach Chii how to live an ordinary life and to uncover the truth behind the elusive chobits series.",
    rate: 3.5,
    category: "seinen",
  },
  {
    id: 27,
    title: "Monster",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Monster_manga_volume_1_cover.jpg/220px-Monster_manga_volume_1_cover.jpg",
    price: 9.99,
    description:
      "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead.\n\nAs a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance.\n\nNine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago.",
    rate: 4.4,
    category: "seinen",
  },
  {
    id: 28,
    title: "NANA",
    image:
      "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088564135/1200/9784088564135.jpg",
    price: 9.99,
    description:
      "Nana Komatsu is a naive, unmotivated girl who spends her high school days chasing one crush after the other. Despite continually facing failure in her quest for love, her spirits have never dampened. At the age of 20, she finds herself on a train to Tokyo with hopes of reuniting with her current boyfriend.\n\nNana Osaki, on the other hand, is feisty and prideful. After joining a local band during her high school days, she falls in love with music and one of the band members. However, when faced with the choice between her relationship and her musical career, she chooses the latter and separates from her boyfriend. On her 20th birthday, she boards the same train to Tokyo, like her namesake, where she aims to become a top vocalist.\n\nThe two girls with the same name but very different aspirations find themselves sitting together on their journey to the city, and, as fate would have it, eventually share the same apartment. A deep and unique bond is then forged, where they will support each other in this saga of love, music, friendship, and heartbreak.",
    rate: 4.5,
    category: "shoujo",
  },
  {
    id: 29,
    title: "Yuyu Hakusho",
    image: "https://dw9to29mmj727.cloudfront.net/products/1591163250.jpg",
    price: 9.99,
    description:
      "Fourteen-year-old thug Yuusuke Urameshi spends his days skipping school and causing trouble for the adults in his life. Yuusuke regularly engages in street brawls against rival Kazuma Kuwabara and ridicules his childhood friend Keiko Yukimura. Filled with self-loathing and the burden of an alcoholic mother, Yuusuke sacrifices it all in a split-second decision—he tackles a small child out of the way of an oncoming car, losing his life in the process.\n\nSpirit guide Botan intervenes, allowing Yuusuke to see how the people in his life react to his death; he is moved by the emotional ruin his loss causes his mother, Keiko, and even Kuwabara. Additionally, due to his death's heroic nature, he receives an opportunity to return to life from the Spirit World ruler's son, Koenma.\n\nKoenma hires Yuusuke as a 'Spirit Detective' and tasks him with solving a series of increasingly challenging paranormal mysteries. Battling and befriending demons such as the beautiful Kurama and hostile Hiei, Yuusuke further develops and utilizes his skills as a fighter. But as dark forces move in the Underworld, Yuusuke struggles alongside his companions to defend everything he took for granted.",
    rate: 4,
    category: "shonen",
  },
  {
    id: 30,
    title: "BAKUMAN",
    image:
      "https://cdn.shopify.com/s/files/1/0282/0970/9115/products/91_XBco_adL_1200x1200.jpg?v=1619184826",
    price: 9.99,
    description:
      "Despite being a talented artist, middle school student Moritaka Mashiro is unsure about his future, accepting that he will simply lead a normal life. After seeing one of Mashiro's drawings in class, Akito Takagi—an aspiring writer—insists that they write a manga together. But Mashiro is hesitant—his uncle, a mangaka, had died from overworking just a few years prior. However, when Mashiro hears that his crush, Miho Azuki, aims to be a voice actress, he becomes determined to create a manga that can be adapted into an anime for her to star in. Reciprocating Mashiro's feelings, she agrees to get married once they have both achieved their dreams.\n\nBakuman. chronicles Mashiro and Takagi's successes and struggles in their attempts to be serialized in Weekly Shounen Jump and become famous mangakas. Will their gamble pay off, or will they join the countless number of failures?",
    rate: 4.7,
    category: "shonen",
  },
  {
    id: 31,
    title: "Boys Over Flowers",
    image: "https://m.media-amazon.com/images/I/51MQYrNqdxL.jpg",
    price: 9.99,
    description:
      "Tsukushi Makino, a working-class girl, attends an elite elevator school called Eitoku Academy, populated by children from rich, high-society families. She is the 'weed' of the school surrounded by all the rich kids including the 'Flower' Four (F4). The F4 leader and son of the wealthiest, most powerful family in Japan, Tsukasa Domyoji, takes an interest in Tsukushi, because she is the only girl at Eitoku who doesn't fawn over him. However, his hot-headed nature and bullying ways are originally a major turn-off for Tsukushi, who has her sights set on someone else.",
    rate: 4.8,
    category: "shoujo",
  },
  {
    id: 32,
    title: "Banana Fish",
    image: "https://m.media-amazon.com/images/I/51a4zQABJEL.jpg",
    price: 9.99,
    description:
      "Ash Lynx is a beauty, a genius—and a murderer. Since childhood, he had been in the care of Dino 'Papa' Golzine, the mafia boss who turned him into the ruthless killer he is now. At first, Ash was just a pretty face for Golzine’s pleasure, but now estranged from him, a 17-year-old Ash runs his own gang with an iron fist.\n\nEiji Okumura is a young Japanese photographer. Traveling to New York as an assistant, Eiji is set to work on a report about kids living in the streets. There, he meets teenage gang leader Ash and is mesmerized by the boy—who in turn is curious about Eiji's different lifestyle.\n\nBut this is the dark underground of New York, and recently a series of murders has surfaced in the city, connected only by the words 'Banana Fish.' With personal stakes in this mysterious battle, it is up to Ash, Eiji and their allies to discover what exactly 'Banana Fish' is, where it came from and how to get rid of it—before the world as they know it descends into chaos.",
    rate: 4.3,
    category: "shoujo",
  },
  {
    id: 33,
    title: "One Piece #100",
    image:
      "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-93680-OnePiece_GN100_C1_Web-3-WlH6FYTOWwrUpPtZsb4mvQ.jpg",
    price: 100.0,
    description:
      "Gol D. Roger, a man referred to as the 'King of the Pirates,' is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins.Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. \n\nArmed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.",
    rate: 5,
    category: "shonen",
  },
  {
    id: 34,
    title: "Shaman King",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/9790/fe7d2329ea8c306d862c64f6f58cbb52fe7640aa7aebcdb502e4e283ebf65bad/l@2x.jpg",
    price: 9.99,
    description:
      "Shamans are extraordinary individuals with the ability to communicate with ghosts, spirits, and gods, which are invisible to ordinary people. The Shaman Fight—a prestigious tournament pitting shamans from all over the world against each other—is held every five hundred years, where the winner is crowned Shaman King. This title allows the current incumbent to call upon the Great Spirit and shape the world as they see fit.\n\nFinding himself late for class one night, Manta Oyamada, an ordinary middle school student, decides to take a shortcut through the local cemetery. Noticing him, a lone boy sitting on a gravestone invites Manta to stargaze with 'them.' Realizing that 'them' refers to the boy and his ghostly friends, Manta flees in terror. Later, the boy introduces himself as You Asakura, a Shaman-in-training, and demonstrates his powers by teaming up with the ghost of six-hundred-year-old samurai Amidamaru to save Manta from a group of thugs. You befriends Manta due to his ability to see spirits, and with the help of Amidamaru, they set out to accomplish You's goal of becoming the next Shaman King.",
    rate: 2.9,
    category: "shonen",
  },
  {
    id: 36,
    title: "Berserk",
    image: "https://cdn.myanimelist.net/images/manga/3/180363.jpg",
    price: 9.99,
    description:
      "Guts, a former mercenary now known as the 'Black Swordsman,' is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings.\n\nSetting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity.",
    rate: 4.5,
    category: "seinen",
  },
  {
    id: 37,
    title: "Vagabond",
    image: "https://cdn.myanimelist.net/images/manga/1/259070.jpg",
    price: 9.99,
    description:
      "In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive.After the two are separated, Shinmen returns home on a self-appointed mission to notify the Hon'iden family of Matahachi's survival. He instead finds himself a wanted criminal, framed for his friend's supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the 'devil child,' secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto.\n\nVagabond is the fictitious retelling of the life of one of Japan's most renowned swordsmen, the 'Sword Saint' Musashi Miyamoto—his rise from a swordsman with no desire other than to become 'Invincible Under the Heavens' to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself.",
    rate: 4,
    category: "seinen",
  },
  {
    id: 38,
    title: "Horimiya",
    image: "https://cdn.myanimelist.net/images/manga/2/245008.jpg",
    price: 9.99,
    description:
      "Although admired at school for her amiability and academic prowess, high school student Kyouko Hori has been hiding another side of her. With her parents often away from home due to work, Hori has to look after her younger brother and do the housework, leaving no chance to socialize away from school.\n\nMeanwhile, Izumi Miyamura is seen as a brooding, glasses-wearing otaku. However, in reality, he is a gentle person inept at studying. Furthermore, he has nine piercings hidden behind his long hair and a tattoo along his back and left shoulder.\n\nBy sheer chance, Hori and Miyamura cross paths outside of school—neither looking as the other expects. These seemingly polar opposites become friends, sharing with each other a side they have never shown to anyone else.",
    rate: 4.5,
    category: "shoujo",
  },
  {
    id: 39,
    title: "Vinland Saga",
    image: "https://cdn.myanimelist.net/images/manga/2/188925.jpg",
    price: 9.99,
    description:
      "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel. Not yet skilled enough to defeat him, but unable to abandon his vengeance, Thorfinn spends his boyhood with the mercenary crew, honing his skills on the battlefield among the war-loving Danes, where killing is just another pleasure of life.\n\nOne day, when Askeladd receives word that Danish prince Canute has been taken hostage, he hatches an ambitious plot—one that will decide the next King of England and drastically alter the lives of Thorfinn, Canute, and himself. Set in 11th-century Europe, Vinland Saga tells a bloody epic in an era where violence, madness, and injustice are inescapable, providing a paradise for the battle-crazed and utter hell for the rest who live in it.",
    rate: 3.1,
    category: "seinen",
  },
  {
    id: 40,
    title: "Tokyo Ghoul:re",
    image: "https://cdn.myanimelist.net/images/manga/3/145997.jpg",
    price: 8.99,
    description:
      "Two years have passed since the CCG's raid on Anteiku. Although the atmosphere in Tokyo has changed drastically due to the increased influence of the CCG, ghouls continue to pose a problem as they have begun taking caution, especially the terrorist organization Aogiri Tree, who acknowledge the CCG's growing threat to their existence.The creation of a special team, known as the Quinx Squad, may provide the CCG with the push they need to exterminate Tokyo's unwanted residents.\n\nAs humans who have undergone surgery in order to make use of the special abilities of ghouls, they participate in operations to eradicate the dangerous creatures. The leader of this group, Haise Sasaki, is a half-ghoul, half-human who has been trained by famed special class investigator, Kishou Arima. \n\nHowever, there's more to this young man than meets the eye, as unknown memories claw at his mind, slowly reminding him of the person he used to be.",
    rate: 3.8,
    category: "seinen",
  },
  {
    id: 41,
    title: "A Silent Voice",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/562/80052ac6d2e94ea0241eec69e549d24c8e80ad9993b39b47c031db3384450040/l@2x.jpg",
    price: 9.99,
    description:
      "Shouya Ishida, a mischievous elementary school student, finds himself troubled by deaf transfer student Shouko Nishimiya. Despite her genuine attempts to befriend her new classmates, Shouko only proves herself to be an annoyance for Shouya and his friends, provoking them to ridicule her at any possible chance. Soon enough, their taunts turn into constant assault—yet the teachers heartlessly remain apathetic to the situation.\n\nShouya's misdeeds are finally stopped when Shouko transfers to another school. Denying their involvement, the entire class puts the blame on Shouya. As the new victim of bullying, Shouya gradually becomes meek and reclusive, being treated with contempt and disregard for years to come.\n\nNow a high school student, Shouya meets Shouko again for the first time in five years. Still tormented by his past actions, Shouya is determined to make amends for his mistakes and confront his trauma—even if he must face arduous obstacles along the way.",
    rate: 3,
    category: "shoujo",
  },
  {
    id: 42,
    title: "Solo Leveling",
    image: "https://cdn.myanimelist.net/images/manga/3/222295.jpg",
    price: 9.99,
    description:
      "Ten years ago, 'the Gate' appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as 'Hunters.' Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the 'World's Weakest,' owing to his pathetic power compared to even a measly E-Rank. Still, he hunts monsters tirelessly in low-rank Gates to pay for his mother's medical bills.\n\nHowever, this miserable lifestyle changes when Jin-Woo—believing himself to be the only one left to die in a mission gone terribly wrong—awakens in a hospital three days later to find a mysterious screen floating in front of him. This 'Quest Log' demands that Jin-Woo completes an unrealistic and intense training program, or face an appropriate penalty. Initially reluctant to comply because of the quest's rigor, Jin-Woo soon finds that it may just transform him into one of the world's most fearsome Hunters.",
    rate: 3,
    category: "shonen",
  },
  {
    id: 43,
    title: "Kaguya Wants to be Confessed",
    image: "https://cdn.myanimelist.net/images/manga/3/188896.jpg",
    price: 7.99,
    description:
      "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship.\n\nHowever, the truth is that after spending so much time together, the two have developed feelings for one another; unfortunately, neither is willing to confess, as doing so would be a sign of weakness. With their pride as elite students on the line, Miyuki and Kaguya embark on a quest to do whatever is necessary to get a confession out of the other. Through their daily antics, the battle of love begins!",
    rate: 3.6,
    category: "seinen",
  },
  {
    id: 44,
    title: "Dr. Stone",
    image: "https://cdn.myanimelist.net/images/manga/1/197883.jpg",
    price: 8.99,
    description:
      "When a mysterious light suddenly engulfs Earth, humanity is left petrified, frozen in stone. Thousands of years later, the world is teeming with vegetation, and forests have taken the places of cities that once stood proudly. One of the very first to emerge from their stone prison is Taiju Ooki, who finds that his good friend, a brilliant young scientist named Senkuu, has been preparing for his awakening. While Taiju wishes to save the girl he loves, Senkuu is determined to figure out the cause behind the strange phenomenon and restore the world to its former glory.\n\nBut when they free the infamously powerful Tsukasa Shishiou in order to gain an upper hand against the dangers in an unfamiliar world, they realize that their new comrade has other plans. Tsukasa sees their predicament as a chance to start over; free from the corruption and destruction wrought by technology, he will stop at nothing to achieve his goals. With both sides unable to see eye to eye, Senkuu and his devotion to science will clash with Tsukasa and his primal nature in what will truly be a battle of the ages.",
    rate: 4.2,
    category: "shonen",
  },
  {
    id: 45,
    title: "Kingdom",
    image: "https://cdn.myanimelist.net/images/manga/2/171872.jpg",
    price: 9.99,
    description:
      "During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status as orphaned slaves. One day, they encounter a man of nobility, who gives Piao an opportunity to undertake an important duty within the state of Qin's royal palace. Parting ways, Xin and Piao promise each other to one day become the greatest generals in the world. However, after a fierce coup d'état occurs in the palace, Xin meets with a dying Piao, whose last words spur him into action and lead him to encounter the young and soon-to-be king of Qin, Zheng Ying.\n\nAlthough initially on bad terms, Xin and Zheng become comrades and start on a path filled with trials and bloodshed. Zheng's objective is to bring all the warring states under Qin, and Xin seeks to climb to the very top of the army ranks. Against a backdrop of constant tactical battle between states and great political unrest, both outside and within the palace, the two endeavor towards their monumental ambitions that will change history forever.",
    rate: 4.8,
    category: "seinen",
  },
  {
    id: 46,
    title: "Blue Lock",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/9313/ba043776b9bead89c89d7fd39552089bc0e96d9e1f6a3335d14b8e304a48f649/l.jpg",
    price: 9.99,
    description:
      "After reflecting on the current state of Japanese soccer, the Japanese Football Association decides to hire the enigmatic and eccentric coach Jinpachi Ego to achieve their dream of winning the World Cup. Believing that Japan has lacked an egoistic striker hungry for goals, Jinpachi initiates the Blue Lock—a prison-like facility where three hundred talented strikers from high schools all over Japan are isolated and pitted against each other. The sole survivor of Blue Lock will earn the right to become the national team's striker, and those who are defeated shall be banned from joining the team forever.\n\nSelected to join this risky project is Yoichi Isagi, a striker who failed to bring his high school soccer team to the national tournament. After choosing to pass to a teammate who missed instead of scoring on his own, he could not help but wonder if the results would have been different had he been more selfish. Using this golden opportunity given by the Blue Lock Project, Yoichi aims to clear his doubts and chase his ultimate desire—to become the greatest striker in the world and lead Japan to World Cup glory.",
    rate: 2.9,
    category: "seinen",
  },
  {
    id: 47,
    title: "Ajin",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/1756/1626536672b9b5ac104758fb22f336b63528be5b686eed66bb9b55603b64d470/l.jpg",
    price: 9.99,
    description:
      "Seventeen years ago, mysterious immortal soldiers known as 'divine warriors' appeared on the battlefields of Africa. These life forms later became known as 'Ajin,' or demi-humans, and were considered to be one of the greatest discoveries of mankind. The government declared their existence to be compatible with humans; however, it is rumored that they instead offer bounties for captured Ajin to secretly perform inhumane experiments on these rare beings.\n\nKei Nagai, an apathetic high school student, is studying to become a doctor and only wishes to live a normal life. However, this simple dream is shattered after he suddenly gets into a deadly traffic accident. Reviving at the scene, he is immediately labeled as an Ajin by bounty-hungry witnesses. Unable to understand his immortality or prove his innocence, he starts to live his life on the run and fights for survival. He barely escapes the government's reach when a group of anarchistic Ajin contacts Kei, asking him to join their forces to retaliate against the government. But who is Kei's real enemy, and which side will he take when it comes down to humans versus Ajin?",
    rate: 3,
    category: "seinen",
  },
  {
    id: 48,
    title: "Paradise Kiss",
    image: "https://cdn.myanimelist.net/images/manga/1/262323.jpg",
    price: 10.99,
    description:
      "After two eccentrically dressed individuals ambush her, high school student Yukari Hayasaka promptly passes out due to shock. She soon awakens to find herself surrounded by even more strangely dressed people in the basement studio of Paradise Kiss—a fashion design club composed of four students from Yazawa School for the Arts. Although it seems like Yukari has been kidnapped, the older students explain that they only approached her to see if she would model their collection for an upcoming fashion show.\n\nBeing a senior with a busy schedule, Yukari furiously rejects the group's offer. But when she drops her student passbook in her haste to leave, the ringleader of the group, George Koizumi, picks it up and uses it as a means to coerce Yukari into considering their request. After hearing about the other members' unbridled ambition, Yukari is inspired to reevaluate her own circumstances and eventually agrees to help them out.\n\nNow as Paradise Kiss' model, Yukari must learn to balance her new responsibilities with her hectic personal life. However, the more time she spends with George and the rest of the team, the harder it becomes for her to avoid getting swept up in the glitz and glamor of the fashion world.",
    rate: 3,
    category: "josei",
  },
  {
    id: 49,
    title: "Chihayafuru",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/1660/70b764b92191e676bd8463fe5303504d3cfe418e53e1d028921ff91593b782e6/l.jpg",
    price: 15.99,
    description:
      "Always deemed inferior to her elder sister, the strong-willed yet aimless Chihaya Ayase has no dream of her own. In contrast to her, Taichi Mashima, the son of a surgeon, is gifted yet insecure as he is burdened by the heavy expectations of his strict mother, who wants him to be perfect in everything. However, the lives of Chihaya and Taichi soon change as they encounter Arata Wataya, the new transfer student in their class.\n\nInspired by Arata's dream to become the best at competitive karuta—a card game based on the classic anthology of one hundred Japanese poets—Chihaya quickly falls in love with the game. Refusing to lose to the talented Arata, the prideful Taichi joins along and immerses himself in the game, aiming to one day surpass his fated rival. The three friends spend their childhood practicing karuta everyday, until certain circumstances force them to part with each other.\n\nA few years later, now in high school, the trio finds themselves reunited through the world of competitive karuta. Alongside their newfound comrades and rivals, they embark on a journey of self-discovery, friendship, and romance.",
    rate: 4.2,
    category: "josei",
  },
  {
    id: 50,
    title: "Chainsaw Man",
    image:
      "https://m.media-amazon.com/images/I/81tadC4LSVL._AC_UF1000,1000_QL80_.jpg",
    price: 9.99,
    description:
      "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.\n\nUnfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil.\n\nNow able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams.",
    rate: 4.9,
    category: "shonen",
  },
  {
    id: 51,
    title: "SPY×FAMILY",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571349928l/52950513.jpg",
    price: 9.99,
    description:
      "For the agent known as 'Twilight,' no order is too tall if it is for the sake of peace. Operating as Westalis' master spy, Twilight works tirelessly to prevent extremists from sparking a war with neighboring country Ostania. For his latest mission, he must investigate Ostanian politician Donovan Desmond by infiltrating his son's school: the prestigious Eden Academy.\n\nThus, the agent faces the most difficult task of his career: get married, have a child, and play family.Twilight, or 'Loid Forger,' quickly adopts the unassuming orphan Anya to play the role of a six-year-old daughter and prospective Eden Academy student. For a wife, he comes across Yor Briar, an absent-minded office worker who needs a pretend partner of her own to impress her friends. However, Loid is not the only one with a hidden nature. Yor moonlights as the lethal assassin 'Thorn Princess.' For her, marrying Loid creates the perfect cover.\n\nMeanwhile, Anya is not the ordinary girl she appears to be; she is an esper, the product of secret experiments that allow her to read minds. Although she uncovers their true identities, Anya is thrilled that her new parents are cool secret agents! She would never tell them, of course. That would ruin the fun.Under the guise of 'The Forgers,' the spy, the assassin, and the esper must act as a family while carrying out their own agendas. Although these liars and misfits are only playing parts, they soon find that family is about far more than blood relations.",
    rate: 4.5,
    category: "shonen",
  },
  {
    id: 52,
    title: "Oshi no Ko",
    image:
      "https://upload.wikimedia.org/wikipedia/it/3/37/Oshi_no_Ko_copertina.jpg",
    price: 9.99,
    description:
      "Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold.\n\nGorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought.\n\nOpening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai's newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai's smile that he loves so much with the help of an eccentric and unexpected ally?",
    rate: 5,
    category: "shoujo",
  },
  {
    id: 53,
    title: "Nodame Cantabile",
    image:
      "https://cdn.myanimelist.net/s/common/store/cover/1238/17a4835e5fd5ae16b119b92785c0024f5e327b12f728fe29ab4c171a46988b56/l.jpg",
    price: 9.99,
    description:
      "Shinichi Chiaki, the perfectionist son of a famous pianist, is in his fourth year at Momogaoka College of Music, hoping to achieve his secret dream of being a conductor. His admiration for his father led him to pursue a career in music. As much as he wants to return to Europe, his phobia of flying traps him in Japan where he now lives.\n\nOne night, he passes out, and ends up being taken in by Megumi 'Nodame' Noda. Upon first glance, Nodame is a talented pianist, but she is also slobbish and eccentric. What's even worse is that she is his neighbor and he ends up forced to work with her. Though it sounds like a recipe for disaster, Chiaki is drawn to this girl who makes him remember the love for music he once held. Just what does the future hold for this musical duo?",
    rate: 3.8,
    category: "josei",
  },
  {
    id: 54,
    title: "Ashi-Girl",
    image: "https://cdn.myanimelist.net/images/manga/3/149258.jpg",
    price: 9.99,
    description:
      "Hayakawa Yui is totally a unmotivated, lazy girl who loves sleeping and eating. She's 16 but looks like a boy from elementary school; her one and only talent is to run really fast. After accidentally switching on the time machine which her younger brother made she travels to the Sengoku period, where luckily she joins retreating foot soldiers using the name Yuinosuke. Then she eats some amanitas and meets the man of her dreams.",
    rate: 3.2,
    category: "josei",
  },
  {
    id: 55,
    title: "Chihayafuru: Chuugakusei-hen",
    image: "https://cdn.myanimelist.net/images/manga/1/206838.jpg",
    price: 9.99,
    description:
      "Ayase Chihaya is a cheerful tomboy without any ambitious aspirations in life. At school one day, she meets a boy named Wataya Arata who is an outcast at school. Feeling pity despite peer pressure, Chihaya befriends Arata as he reveals to her his aptitude in karuta which institutes Chihaya's dream to become a karuta queen.",
    rate: 3.3,
    category: "josei",
  },
  {
    id: 56,
    title: "Usagi Drop",
    image: "https://cdn.myanimelist.net/images/manga/2/203854.jpg",
    price: 9.99,
    description:
      "When bachelor Daikichi Kawachi attends his grandfather's funeral, he is surprised to find a mysterious young girl alone in the garden. To his astonishment, the shy and reserved girl, named Rin Kaga, is believed to be the illegitimate child of his late grandfather.\n\nDue to the shameful circumstances related to the little girl, no one in the family is willing to take her in following her father's death. Infuriated by the coldness extended to an innocent child, Daikichi announces that he will take care of Rin himself, despite his young age, single status, and lack of parental experience.\n\nUsagi Drop follows the story of Daikichi and Rin as they try to find happiness and purpose to their fateful meeting.",
    rate: 2.5,
    category: "josei",
  },
  {
    id: 57,
    title: "Hachimitsu to Clover",
    image: "https://cdn.myanimelist.net/images/manga/3/184591.jpg",
    price: 9.99,
    description:
      "Takemoto lives in a run down student apartment, where his greatest worry is when he'll next be able to afford to eat meat and whether he'll get to class on time. Although he's away from home and living on his own, Takemoto is far from finished growing up. Along with his crazy cast of friends, Morita, Mayama, Yamada, and Hagumi, Takemoto sets out to discover life and his true self.",
    rate: 2.5,
    category: "josei",
  },
];

export default mangaData;

// {
//   id: ,
//   title: "",
//   image: "",
//   price: 9.99,
//   description:
//     "",
//   rate: 3,
//   category: "josei",
// },
