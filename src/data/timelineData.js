/**
 * Philippine Left Timeline — Data
 *
 * Each era contains:
 *   id       — slug for anchor/scroll links
 *   title    — era heading
 *   subtitle — date range shown in badge
 *   color    — hex accent for this era
 *   icon     — Lucide icon name
 *   events[] — array of timeline entries
 *
 * Each event contains:
 *   date         — date string
 *   organization — name of org / event
 *   description  — narrative description
 */

export const timelineData = [
  {
    id: 'early-labor',
    title: 'Early Labor and Socialist Formation',
    subtitle: 'Pre-1930',
    color: '#b91c1c',
    icon: 'Hammer',
    events: [
      {
        date: '1901',
        organization: 'Unión de Impresores de Filipinas (UIF)',
        description: 'One of the earliest modern Filipino trade unions, rooted in printer workers and associated with the labor milieu of Isabelo de los Reyes; it helped seed the union culture and leadership networks that later fed into broader federations such as the UOD and COF.',
      },
      {
        date: '2 February 1902',
        organization: 'Unión Obrera Democrática Filipina (UODF)',
        description: 'The first major Filipino labor federation, uniting craft and urban workers under a nationalist labor program; it provided the institutional and ideological bridge from early labor mutualism to later class-based organizing and socialist politics.',
      },
      {
        date: '1903',
        organization: 'Unión del Trabajo de Filipinas',
        description: 'A more moderate successor current that emerged after the repression of the UOD, showing how early labor organizing survived state crackdown by reorganizing in less confrontational form while preserving federation-building.',
      },
      {
        date: '1 May 1913',
        organization: 'Congreso Obrero de Filipinas (COF)',
        description: 'A national labor congress that consolidated many unions into a wider workers\' center; it became the arena where moderate and militant currents contended, out of which the communist and socialist tendencies of Evangelista\'s bloc would later break.',
      },
      {
        date: '1924',
        organization: 'Partido Obrero de Filipinas',
        description: 'An early workers\' party formed by labor radicals moving from unionism into electoral-political struggle; it foreshadowed the later crystallization of explicitly communist and socialist organizations by linking labor unrest to party politics.',
      },
      {
        date: '1929',
        organization: 'Katipunan ng mga Anakpawis sa Pilipinas (KAP)',
        description: 'A militant labor federation formed by the Evangelista tendency after conflict inside the COF; it served as the immediate organizational stepping stone from labor federation politics to the founding of the PKP in 1930.',
      },
    ],
  },
  {
    id: 'pkp-era',
    title: 'The PKP Era and the Rise of the Left',
    subtitle: '1930–1942',
    color: '#dc2626',
    icon: 'Flag',
    events: [
      {
        date: '26 August 1930',
        organization: 'Partido Komunista ng Pilipinas (PKP)',
        description: 'The first communist party in the Philippines, built largely out of the militant labor current around Evangelista and KAP; it carried the transition from radical unionism to a more coherent communist movement and later shaped the Huks, CLO, and postwar united fronts.',
      },
      {
        date: '25 July 1931',
        organization: 'CEGP (College Editors Guild of the Philippines)',
        description: 'A nationwide student press alliance that did not belong to a single left current at birth, but later became part of the wider democratic and activist student terrain from which both nationalist and left formations would draw cadres.',
      },
      {
        date: '26 October 1932',
        organization: 'Partido Sosyalista ng Pilipinas (PSP)',
        description: 'Pedro Abad Santos\'s socialist formation in Central Luzon, rooted in peasant and tenant struggles rather than urban labor alone; its later merger with the PKP fused agrarian socialism with communist party organization and helped deepen the left\'s rural base.',
      },
      {
        date: '7 November 1938',
        organization: 'PKP-Merger',
        description: 'The 1938 unification of the PKP and PSP, which joined Evangelista\'s labor-communist current with Abad Santos\'s peasant-socialist base, creating the organizational lineage that would lead into wartime resistance and the Huk movement.',
      },
    ],
  },
  {
    id: 'huk-movement',
    title: 'War, Resistance, and the Huk Movement',
    subtitle: '1942–1954',
    color: '#d97706',
    icon: 'Swords',
    events: [
      {
        date: '29 March 1942',
        organization: 'Hukbong Bayan Laban sa Hapon (HUKBALAHAP)',
        description: 'The PKP-led anti-Japanese guerrilla army in Central Luzon, forged from peasant militancy and communist organization; it linked wartime resistance to the postwar agrarian and revolutionary struggles that later continued under new names.',
      },
      {
        date: 'March 1945',
        organization: 'Congress of Labor Organizations (CLO)',
        description: 'A labor center organized under PKP influence to rebuild legal trade-union activity; it represented the communist movement\'s effort to complement armed struggle with mass legal labor organizing.',
      },
      {
        date: '15 July 1945',
        organization: 'Democratic Alliance (DA)',
        description: 'A broad postwar united front of left, peasant, labor, and anti-elite forces built for the 1946 elections; it showed the PKP orbit\'s tactical shift into electoral coalition-building even while repression was pushing the movement back toward armed resistance.',
      },
      {
        date: 'January 1950',
        organization: 'Hukbong Mapagpalaya ng Bayan (HMB)',
        description: 'The reorganized armed force that succeeded the wartime Huks in the postwar insurgency, reflecting continuity of peasant-based communist resistance after the breakdown of legal openings for the DA and related left forces.',
      },
      {
        date: '19 June 1950',
        organization: 'FFW (Federation of Free Workers)',
        description: 'A major Christian-inspired labor federation that developed partly in contrast to communist-led labor currents; it became a key non-communist labor pole in the postwar era and an important counterweight to PKP-linked unionism.',
      },
      {
        date: '25 October 1953',
        organization: 'FFF (Federation of Free Farmers)',
        description: 'A Christian-democratic peasant organization that emerged as a reformist alternative to communist-led agrarian mobilization; it occupied a different ideological space from the Huk tradition while drawing from the same countryside social crisis.',
      },
    ],
  },
  {
    id: 'postwar-left',
    title: 'Postwar Left Reorganization',
    subtitle: '1954–1968',
    color: '#059669',
    icon: 'BookOpen',
    events: [
      {
        date: '1957',
        organization: 'NUSP (National Union of Students of the Philippines)',
        description: 'A national student alliance representing a more open democratic student sphere from which later nationalist, social-democratic, and revolutionary currents would recruit and compete.',
      },
      {
        date: '1959',
        organization: 'Student Cultural Association of the University of the Philippines (SCAUP)',
        description: 'A UP-based intellectual and political formation associated with Jose Maria Sison\'s early nationalist-radical organizing; it served as one of the preparatory circles out of which the KM and later the CPP current would emerge.',
      },
      {
        date: '30 November 1964',
        organization: 'Kabataang Makabayan (KM)',
        description: 'The flagship nationalist youth organization of the late 1960s, founded by Sison and central to the rise of the national-democratic movement; it became the principal youth pipeline into the reestablished CPP, while also spawning dissident youth currents such as SDK and prompting the PKP to form MPKP.',
      },
      {
        date: '1967',
        organization: 'Movement for the Advancement of Nationalism (MAN)',
        description: 'A broader nationalist alliance that connected intellectuals, professionals, and activists around anti-imperialist politics; it formed part of the wider ideological environment from which both legal nationalist and revolutionary formations grew.',
      },
      {
        date: '30 November 1967',
        organization: 'Malayang Pagkakaisa ng Kabatàang Pilipino (MPKP)',
        description: 'The youth and student arm of the pro-Soviet PKP-1930, created after the PKP\'s rupture with the increasingly Maoist KM; it embodied the split between the older communist line and the emergent CPP current.',
      },
      {
        date: '30 January 1968',
        organization: 'Samahan ng Demokratikong Kabataan (SDK)',
        description: 'A youth formation born from a break with KM, initially reflecting tensions over style, ideology, and organization within the anti-Marcos student movement; despite the split, it later converged with the broader national-democratic resistance against dictatorship.',
      },
    ],
  },
    {
    "id": "revolutionary-left",
    "title": "The Reemergence of the Revolutionary Left",
    "subtitle": "1968–1986",
    "color": "#7c3aed",
    "icon": "Flame",
    "events": [
      {
        "date": "26 December 1968",
        "organization": "Communist Party of the Philippines (MLM) (CPP-MLM)",
        "description": "The reestablished Maoist communist party founded in 1968 in rupture with the PKP-1930, criticizing the latter's \"revisionism\" and placing protracted people's war at the center of strategy; it became the core of the modern national-democratic revolutionary bloc.",
      },
      {
        "date": "29 March 1969",
        "organization": "New People's Army (NPA)",
        "description": "The armed wing of the CPP, established in 1969 by combining the new Maoist party with Bernabe Buscayno's peasant guerrilla force; it replaced the old PKP/Huk insurgent lineage with a new revolutionary military formation.",
      },
      {
        "date": "1970",
        "organization": "Kapulungan ng mga Sandigan ng Pilipinas (KASAPI)",
        "description": "A social-democratic organization formed by young activists in the Jesuit and reformist milieu, offering a non-communist but militant anti-dictatorship alternative; some of its armed elements later spun off into the April 6 Liberation Movement.",
      },
      {
        "date": "17 February 1970",
        "organization": "LAKASDIWA",
        "description": "A nonviolent Filipino social-democratic current associated with Ed Garcia and other socdems during the First Quarter Storm; it occupied the space between traditional opposition liberalism and Maoist revolutionary politics, and helped shape the later PDSP/FSDM stream.",
      },
      {
        "date": "18 April 1970",
        "organization": "Malayang Kilusan ng Bagong Kababaihan (MAKIBAKA)",
        "description": "A women's militant organization that arose from the national-democratic upsurge, initially involving activists from KM, SDK, and related groups; it pushed women's liberation into the revolutionary movement and later became part of the NDF orbit.",
      },
      {
        "date": "20 October 1970",
        "organization": "Zone One Tondo Organization (ZOTO)",
        "description": "A major urban-poor organization in Tondo that connected slum and relocation-site struggles to the broader anti-dictatorship and national-democratic movement, helping extend left organizing beyond campuses and factories.",
      },
      {
        "date": "28 March 1971",
        "organization": "Katipunan ng Gurong Makabayan (KAGUMA)",
        "description": "A teachers' formation in the nationalist-democratic current, showing how the movement was building specialized sectoral organizations alongside youth, women, labor, and urban-poor fronts.",
      },
      {
        "date": "1972",
        "organization": "Marxist-Leninist Group (MLG)",
        "description": "A Marxist split from the PKP-1930 associated with figures like Francisco Nemenzo who opposed the old party's line on Marcos and martial law; it formed part of the heterogeneous non-CPP socialist milieu that later fed into BISIG and related currents.",
      },
      {
        "date": "17 February 1972",
        "organization": "Christians for National Liberation (CNL)",
        "description": "A revolutionary Christian formation aligned with the national-democratic movement, linking liberationist religious activists to the CPP-NDF current and broadening the social composition of the anti-dictatorship resistance.",
      },
      {
        "date": "24 April 1973",
        "organization": "National Democratic Front of the Philippines (NDFP)",
        "description": "The united-front formation built under CPP initiative to assemble sectoral revolutionary organizations under a common anti-imperialist and anti-feudal program; it served as the political umbrella linking the CPP, NPA, and allied mass organizations.",
      },
      {
        "date": "1 May 1973",
        "organization": "Partido Demokratiko Sosyalista ng Pilipinas (PDSP)",
        "description": "The main party expression of Filipino social democracy during martial law, positioned against both Marcos authoritarianism and the Maoist revolutionary line; it inherited and systematized the earlier KASAPI-LAKASDIWA current.",
      },
      {
        "date": "26 December 1975",
        "organization": "Liga ng Agham para sa Bayan",
        "description": "A patriotic science-and-technology organization within the national-democratic sphere, illustrating how the movement created professional-sector bodies tied to a wider revolutionary and anti-dictatorship front.",
      },
      {
        "date": "11 September 1977",
        "organization": "League of Filipino Students (LFS)",
        "description": "A student formation that began around democratic rights and campus repression under martial law and later became one of the most important youth organizations within the national-democratic movement, helping feed into Anakbayan in the 1990s.",
      },
      {
        "date": "1978",
        "organization": "Light-A-Fire Movement",
        "description": "A small anti-Marcos urban sabotage group located closer to the political center than to the revolutionary left, showing that armed resistance to the dictatorship also existed outside the CPP and social-democratic traditions.",
      },
      {
        "date": "1978",
        "organization": "LABAN (Lakas ng Bayan)",
        "description": "Ninoy Aquino's electoral opposition vehicle for the 1978 elections; while not a left organization in the strict sense, it became one of the central poles around which moderate, reformist, and later merged opposition formations interacted with social democrats and anti-dictatorship coalitions.",
      },
      {
        "date": "6 December 1978",
        "organization": "Makabayang Samahang Pangkalusugan (MSP)",
        "description": "A health-sector organization aligned with the revolutionary movement, part of the NDF-style effort to build sector-specific bodies among professionals and service workers rather than relying only on party or military structures.",
      },
      {
        "date": "1980",
        "organization": "April 6 Liberation Movement",
        "description": "An urban guerrilla formation created by armed elements of KASAPI with links to anti-Marcos opposition abroad, showing the social-democratic current's brief turn toward armed struggle outside the CPP-NPA framework.",
      },
      {
        "date": "January 1980",
        "organization": "UNIDO (United Nationalist Democratic Organization)",
        "description": "The main traditional-opposition alliance against Marcos, gathering elite and reformist anti-dictatorship currents; it interacted uneasily with social democrats and the mass-based left but became a crucial anti-Marcos electoral pole.",
      },
      {
        "date": "1 May 1980",
        "organization": "Kilusang Mayo Uno (KMU)",
        "description": "A militant labor center established during martial law that organized workers within the national-democratic line; it became the major labor arm of the anti-dictatorship left and later generated breakaway currents such as the BMP after the 1992 split.",
      },
      {
        "date": "1981",
        "organization": "Cordillera People's Democratic Front (CPDF)",
        "description": "A regional revolutionary-democratic front in the Cordillera that linked indigenous self-determination, anti-dam resistance, and the national-democratic movement; it later formed part of the political background from which the CPLA split.",
      },
      {
        "date": "7 June 1981",
        "organization": "PISTON (Pagkakaisa ng mga Samahan ng Tsuuper at Opereytor Nationwide)",
        "description": "A national federation of transport workers and operators whose campaigns tied livelihood, fuel price, and labor questions to broader progressive politics, later becoming part of the national-democratic mass movement constellation.",
      },
      {
        "date": "6 February 1982",
        "organization": "PDP (Partido Demokratiko Pilipino)",
        "description": "A reformist anti-Marcos opposition party founded by Nene Pimentel and others, representing a democratic opposition current that later merged with LABAN and intersected with wider anti-dictatorship coalitions.",
      },
      {
        "date": "26 June 1982",
        "organization": "Alliance of Concerned Teachers (ACT)",
        "description": "A teachers' organization founded under martial law to defend educators' welfare and democratic rights; it later became part of the broader progressive and anti-dictatorship coalition politics of the 1980s.",
      },
      {
        "date": "February 1983",
        "organization": "PDP-LABAN",
        "description": "The merger of PDP and LABAN, combining two major anti-Marcos reformist-electoral currents; it became one of the principal opposition party vehicles operating alongside street coalitions such as JAJA, KAAKBAY, and ATOM.",
      },
      {
        "date": "March 1983",
        "organization": "KAAKBAY (Kilusan sa Kapangyarihan at Karapatan ng Bayan)",
        "description": "A broad umbrella for \"parliament of the streets\" politics under Jose Diokno, linking moderate democrats, social democrats, activists, and later coalition partners in JAJA; it was central to creating a non-CPP mass opposition line.",
      },
      {
        "date": "25 August 1983",
        "organization": "JAJA (Justice for Aquino, Justice for All)",
        "description": "The first major post-assassination anti-Marcos coalition, bringing together KAAKBAY, ATOM, and a range of other democratic and progressive forces; it was a transitional umbrella through which street-based opposition politics expanded after Ninoy's murder.",
      },
      {
        "date": "September 1983",
        "organization": "ATOM (August Twenty-One Movement)",
        "description": "A middle-class anti-Marcos protest movement formed after Aquino's assassination, closely associated with Butz Aquino; it helped draw broader urban and professional layers into the anti-dictatorship mass upsurge and collaborated with JAJA and related coalitions.",
      },
      {
        "date": "1 May 1985",
        "organization": "Bagong Alyansang Makabayan (BAYAN)",
        "description": "A broad anti-dictatorship alliance of national-democratic organizations founded in 1985, representing the CPP-aligned mass movement's attempt to consolidate workers, peasants, women, youth, urban poor, and professionals into a single legal united front; its internal tensions later helped produce the BISIG and BANDILA trajectories.",
      },
      {
        "date": "May 1985",
        "organization": "BANDILA (Bansang Nagkakaisa sa Diwa at Layunin)",
        "description": "A moderate anti-Marcos coalition that emerged from the split between BAYAN's national-democratic bloc and more moderate/social-democratic forces, making explicit the strategic divide between CPP-aligned and non-CPP anti-dictatorship politics.",
      },
      {
        "date": "24 July 1985",
        "organization": "Kilusang Magbubukid ng Pilipinas (KMP)",
        "description": "A militant peasant movement within the national-democratic orbit, built to organize for genuine land reform and rural rights; it became the principal agrarian mass organization associated with the CPP-aligned left and later experienced its own splits.",
      },
      {
        "date": "4 August 1985",
        "organization": "FSDM (Filipino Social Democratic Movement)",
        "description": "A social-democratic formation launched in the last phase of the dictatorship, part of the same broad current as PDSP, KAAKBAY, and BANDILA; it helped carry the socdem current from anti-Marcos resistance into post-EDSA legal politics.",
      }
    ]
  },
  {
    "id": "fragmentation",
    "title": "Fragmentation, Realignment, and New Left Formations",
    "subtitle": "1986–1998",
    "color": "#2563eb",
    "icon": "GitBranch",
    "events": [
      {
        "date": "April 1986",
        "organization": "Cordillera People's Liberation Army",
        "description": "A breakaway armed formation from the CPP-NPA current in the Cordillera, rooted in disputes over indigenous autonomy, strategy, and regional leadership; its split reflected the wider tensions between national-democratic centralism and local ethnonational claims.",
      },
      {
        "date": "May 1986",
        "organization": "BISIG (Bukluran sa Ikauunlad ng Sosyalistang Isip at Gawa)",
        "description": "An open legal socialist organization that emerged from the \"independent\" wing of the 1985 BAYAN split, drawing from ex-PKP, non-CPP Marxist, and democratic-socialist currents; it sought a Filipino socialism distinct from both Maoist orthodoxy and traditional elite opposition, and later fed into Akbayan's formation.",
      },
      {
        "date": "30 August 1986",
        "organization": "Partido ng Bayan (PnB)",
        "description": "Partido ng Bayan (PnB) was a broad left-wing nationalist electoral party launched in 1986 to bring the anti-dictatorship and progressive movement into open parliamentary politics after the fall of Marcos. It became associated with the legal national-democratic current and contested the 1987 elections.",
      },
      {
        "date": "13 January 1987",
        "organization": "Artista at Manunulat para sa Sambayanan (ARMAS)",
        "description": "A cultural-sector formation in the national-democratic movement, part of the NDF-style pattern of creating specialized organizations among artists and writers to connect cultural work with revolutionary politics.",
      },
      {
        "date": "March 1987",
        "organization": "Pandayan Para sa Sosyalistang Pilipinas (PANDAYAN)",
        "description": "A democratic-socialist organization focused on grassroots multi-sector organizing and active nonviolence; together with BISIG and allied currents, it later contributed to the social-democratic stream that helped found Akbayan.",
      },
      {
        "date": "7 December 1987",
        "organization": "PAMALAKAYA (Pambansang Lakas ng Kilusang Mamamalakaya ng Pilipinas)",
        "description": "A national fisherfolk federation that organized small fishers around coastal rights, livelihood, and resource justice; it developed as the marine-sector counterpart to peasant and labor organizing within the broader progressive movement.",
      },
      {
        "date": "March 1988",
        "organization": "Freedom from Debt Coalition (FDC)",
        "description": "A multisectoral coalition that reframed debt and structural adjustment as mass political questions, linking post-Marcos economic critique to labor, peasant, NGO, church, and social-movement activism beyond the classic party-front model.",
      },
      {
        "date": "1993",
        "organization": "Rebolusyonaryong Partido ng Proletaryo (RPP)",
        "description": "A socialist current that emerged from younger cadres of the older PKP tradition, seeking to renew non-Maoist revolutionary politics; it later fused with Liga Sosyalista in the process that formed the SPP.",
      },
      {
        "date": "14 September 1993",
        "organization": "Bukluran ng Manggagawang Pilipino (BMP)",
        "description": "A militant labor center created after the post-1992 left divide, especially by workers leaving the KMU sphere; it represented the fragmentation of the labor front as anti-reaffirmist currents built independent structures outside the CPP line.",
      },
      {
        "date": "29 October 1993",
        "organization": "Sanlakas",
        "description": "A broad progressive coalition formed in the post-split environment to unite anti-authoritarian, left-democratic, and movement forces outside the old binary of CPP versus traditional opposition; it became one of the more visible \"plural left\" formations of the 1990s.",
      },
      {
        "date": "November 1993",
        "organization": "Demokratikong Kilusang Magbubukid ng Pilipinas (DKMP)",
        "description": "A peasant organization formed after conflict within the KMP, illustrating how the post-1992 split and related tactical disputes also fractured the agrarian movement, not just party and labor formations.",
      },
      {
        "date": "July 1995",
        "organization": "Partido Proletaryo Demokratiko (PPD)",
        "description": "A Marxist formation of the \"Third Force\" current in the fragmented post-1992 left, representing those who rejected both CPP reaffirmism and looser coalition politics while still seeking a disciplined revolutionary organization.",
      },
      {
        "date": "2 February 1996",
        "organization": "Rebolusyonaryong Partido ng Manggagawa-Pilipinas (RPM-P)",
        "description": "A revolutionary workers' party formed by anti-reaffirmist Marxist-Leninists who broke from the CPP and rejected Maoism and protracted people's war; it became one of the principal organized expressions of the non-CPP revolutionary left.",
      },
      {
        "date": "April 1996",
        "organization": "Revolutionary Proletarian Army (RPA)",
        "description": "The armed component announced by the RPM-P, showing that anti-reaffirmist politics did not remain purely legal or electoral but also built an alternative revolutionary armed structure outside the CPP-NPA.",
      },
      {
        "date": "December 1996",
        "organization": "Migrante International",
        "description": "A global alliance of Filipino migrants formed in the wake of Flor Contemplacion, linking overseas labor, migrant rights, and national political advocacy; it expanded the left's social reach beyond domestic sectoral organizing.",
      },
      {
        "date": "1997",
        "organization": "PADAYON",
        "description": "A pluralist and democratic socialist formation of the 1990s, part of the broader rethinking of socialist politics after the CPP split and the end of the dictatorship, and one of several efforts to build a non-dogmatic left.",
      },
      {
        "date": "1997",
        "organization": "Revolutionary Proletarian Army-Alex Boncayao Brigade",
        "description": "The merger of the RPA with the ABB current, joining anti-reaffirmist provincial guerrilla forces with an urban armed tradition that had earlier been associated with the anti-CPP left.",
      },
      {
        "date": "1998",
        "organization": "Alab Katipunan",
        "description": "A socialist workers' political organization in the Philippines, active in the legal mass movement and associated with the post-CPP rejectionist left.",
      },
      {
        "date": "17 January 1998",
        "organization": "Akbayan Citizens' Action Party",
        "description": "An electoral formation created by democratic-socialist, social-democratic, and allied progressive currents including BISIG and PANDAYAN; it represented one of the clearest moves by sections of the left from underground or extra-parliamentary politics into sustained electoral engagement.",
      },
      {
        "date": "10 June 1998",
        "organization": "Kilusan para sa Pambansang Demokrasya (KPD)",
        "description": "An open political formation launched in Central Luzon in 1998 by activists and organizers from the post-split left. While it drew from a national-democratic tradition, it distinguished itself from more orthodox expressions of that program by placing greater emphasis on legal, open, and public political organizing."
      },
      {
        "date": "19 July 1998",
        "organization": "Liga Sosyalista",
        "description": "A socialist organization formed by cadres from the Popoy Lagman current of the post-1992 split; it later joined with the RPP in the unity process that produced the SPP, showing the recombination of non-CPP socialist tendencies.",
      },
      {
        "date": "September 1998",
        "organization": "Marxist-Leninist Party of the Philippines (MLPP)",
        "description": "A Marxist-Leninist party established in September 1998 out of the Central Luzon split from the Communist Party of the Philippines that emerged in 1997. It marked the formal party consolidation of that split and stood as a distinct organization within the post-1992 and post-1997 reconfigurations of the Philippine left."
      },
      {
        "date": "September 1998",
        "organization": "Rebolusyonaryong Hukbong Bayan (RHB)",
        "description": "The armed wing of the MLPP, created after the post-1992 split and the expulsion of Central Luzon cadres from the CPP. Organized following the MLPP’s establishment in 1998, it became the party’s armed force, rooted mainly in Central Luzon.",
      },
      {
        "date": "7 November 1998",
        "organization": "Kalipunan ng Damayang Mahihirap (KADAMAY)",
        "description": "An urban-poor alliance formed to consolidate anti-demolition, housing, and livelihood struggles, representing the continued institutionalization of sectoral mass organizing in the post-EDSA period.",
      },
      {
        "date": "30 November 1998",
        "organization": "Sosyalistang Partido ng Paggawa (SPP)",
        "description": "A revolutionary socialist party formed through a left-unity effort involving ex-PKP, ex-CPP, Liga Sosyalista, and RPP currents; it was one of the most serious attempts to rebuild a non-Maoist revolutionary socialist pole after the great fragmentation of the 1990s.",
      },
      {
        "date": "30 November 1998",
        "organization": "Anakbayan",
        "description": "A comprehensive youth organization formed by LFS and allied national-democratic activists to unify student and out-of-school youth organizing under one broader youth formation in the late post-dictatorship era.",
      }
    ]
  },
  {
    "id": "contemporary-left",
    "title": "Pluralization of the Contemporary Left",
    "subtitle": "1999–Present",
    "color": "#db2777",
    "icon": "Users",
    "events": [
      {
        "date": "30 January 1999",
        "organization": "Partido ng Manggagawang Pilipino (PMP)",
        "description": "A Marxist-Leninist workers' party associated with the Popoy Lagman current after its withdrawal from the RPM-P project, reflecting the continued proliferation of post-split socialist and revolutionary organizations.",
      },
      {
        "date": "25 September 1999",
        "organization": "Bayan Muna",
        "description": "A progressive party-list organization that translated mass-movement politics, especially from the national-democratic current, into parliamentary representation and later became a pillar of the Makabayan electoral bloc.",
      },
      {
        "date": "28 October 2000",
        "organization": "Gabriela Women's Party",
        "description": "The electoral party-list expression of the broader GABRIELA women's movement, bringing women's mass organizing into Congress while remaining connected to a wider progressive and national-democratic ecosystem.",
      },
      {
        "date": "12 February 2001",
        "organization": "Partido Manggagawa (PM)",
        "description": "A labor-oriented party-list current linked to socialist labor leaders from the PMP/BMP milieu, representing another path by which post-split left formations entered legal electoral politics.",
      },
      {
        "date": "1 May 2001",
        "organization": "Rebolusyonaryong Partido ng Manggagawa-Mindanao (RPM-M)",
        "description": "A revolutionary workers' party formed when Mindanao committees left the RPM-P, demonstrating that fragmentation continued even within anti-reaffirmist revolutionary organizations.",
      },
      {
        "date": "19 June 2001",
        "organization": "Kabataan Party-list",
        "description": "The parliamentary youth wing of the national-democratic movement, closely linked to student and youth mass organizations such as Anakbayan and positioned as the congressional counterpart to street and campus organizing.",
      },
      {
        "date": "7 November 2001",
        "organization": "Partido Marxista-Leninista ng Pilipinas (PMLP)",
        "description": "A Marxist-Leninist formation associated with a \"Bloke\" current from the ABB/RPM-P milieu, part of the continuing differentiation of the anti-CPP revolutionary left.",
      },
      {
        "date": "5 August 2002",
        "organization": "Partido ng Manggagawang Pilipino - Pinagsanib",
        "description": "A merger formation produced when PMP joined with PPD and SPP, representing another attempt to recombine fractured socialist and workers' currents into a more coherent party project.",
      },
      {
        "date": "2003",
        "organization": "Rebolusyonaryong Grupo ng mga Komunista (RGK)",
        "description": "RGK was a small Trotskyist revolutionary organization in the Philippines that advocated proletarian internationalism and socialist revolution, and aligned itself with the tradition of the Fourth International.",
      },
      {
        "date": "27 June 2005",
        "organization": "Moro Resistance Liberation Organization (MRLO)",
        "description": "A Moro organization linked in some sources to the allied-organization milieu of the NDF, indicating the revolutionary left's efforts to engage the Moro question through associated rather than identical political forms.",
      },
      {
        "date": "29 June 2005",
        "organization": "Laban ng Masa",
        "description": "A broad coalition of socialist, labor, urban-poor, and other non-CPP left formations, first assembled as a common front and later revived electorally; it became one of the principal expressions of the democratic-socialist and plural-left camp.",
      },
      {
        "date": "April 2007",
        "organization": "RPMP/RPA/ABB - Tabara-Paduano Group",
        "description": "One of the two main factions that emerged from the 2007 split in the RPM-P/RPA-ABB peace-process bloc, showing how leadership and command disputes continued to fragment anti-reaffirmist armed formations.",
      },
      {
        "date": "April 2007",
        "organization": "RPMP/RPA/ABB - Nilo Dela Cruz Group",
        "description": "The other major faction in the 2007 RPM-P/RPA-ABB split, underscoring the unstable institutional consolidation of post-CPP revolutionary alternatives.",
      },
      {
        "date": "16 April 2009",
        "organization": "Makabayan coalition",
        "description": "An electoral alliance of national-democratic party-list groups that brought organizations such as Bayan Muna, Gabriela Women's Party, and Kabataan into a common bloc, effectively translating the BAYAN-style united-front logic into party-list competition.",
      },
      {
        "date": "30 January 2009",
        "organization": "Partido Lakas ng Masa (PLM)",
        "description": "A socialist political formation built by workers, urban poor, peasants, and allied sectors in the non-CPP left, later overlapping with the broader Laban ng Masa current as part of contemporary democratic-socialist realignment.",
      },
      {
        "date": "24 January 2024",
        "organization": "Partido Sosyalista",
        "description": "A new open socialist party launched in 2024 that seeks to rebuild explicit socialist politics through above-ground organizing; it stands in continuity with earlier non-CPP socialist and democratic-socialist traditions such as BISIG, SPP, and Laban ng Masa while responding to the present conjuncture.",
      }
    ]
  }
];
