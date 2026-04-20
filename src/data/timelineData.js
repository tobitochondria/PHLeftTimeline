/**
 * Philippine Left Timeline — Data
 *
 * Each era contains:
 * id       — slug for anchor/scroll links
 * title    — era heading
 * subtitle — date range shown in badge
 * color    — hex accent for this era
 * icon     — Lucide icon name
 * events[] — array of timeline entries
 *
 * Each event contains:
 * date         — date string
 * organization — name of org / event
 * description  — narrative description
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
        date: 'November 1901 / 30 December 1901',
        organization: 'Unión de Impresores de Filipinas (UIF)',
        description: 'One of the earliest modern Filipino trade unions, rooted in printer workers and associated with the labor milieu of Isabelo de los Reyes; it helped seed the union culture and leadership networks that later fed into broader federations such as the UOD and COF.',
      },
      {
        date: '2 February 1902',
        organization: 'Unión Obrera Democrática Filipina (UODF)',
        description: 'The first major Filipino labor federation, uniting craft and urban workers under a nationalist labor program; it provided the institutional and ideological bridge from early labor mutualism to later class-based organizing and socialist politics.',
      },
      {
        date: 'October 1903',
        organization: 'Unión del Trabajo de Filipinas',
        description: 'A more moderate successor current that emerged after the repression of the UOD, showing how early labor organizing survived state crackdown by reorganizing in less confrontational form while preserving federation-building.',
      },
      {
        date: '1909',
        organization: 'Union de Tabaqueros de Filipinas (UTF)',
        description: 'A pioneer labor union composed of tobacco factory workers, which played a foundational role in early trade unionism and mass organizing in Manila.',
      },
      {
        date: '1 May 1913',
        organization: 'Congreso Obrero de Filipinas (COF)',
        description: 'A national labor congress that consolidated many unions into a wider workers\' center; it became the arena where moderate and militant currents contended, out of which the communist and socialist tendencies of Evangelista\'s bloc would later break.',
      },
      {
        date: 'May 1917',
        organization: 'Pagkakaisa ng Magsasaka',
        description: 'One of the earliest peasant unions in the Philippines, founded in Bulacan to advocate for tenants\' rights against feudal land ownership.',
      },
      {
        date: '1919',
        organization: 'Anak-Pawis',
        description: 'A pioneer peasant organization founded in Mexico, Pampanga; it formed part of the early wave of rural mobilization that established the foundations for agrarian struggle in Central Luzon',
      },
      {
        date: 'August 1922',
        organization: 'Kalipunang Pangbansa ng mga Magbubukid sa Pilipinas (KPMP)',
        description: 'Originally established as the Confederacion Nacional de Aparceros y Obreros Agricolas de Filipinas, it was renamed in 1924 and became the largest peasant organization in Central Luzon.',
      },
      {
        date: 'September 1922',
        organization: 'Partido Obrero',
        description: 'A labor party founded by Antonio Ora that sought to represent the interests of the Filipino working class in the electoral arena, predating the formal establishment of the PKP.',
      },
      {
        date: 'November 1928',
        organization: 'Katipunan ng mga Kabataang Anak-Pawis',
        description: 'The youth wing of the militant labor movement, designed to organize and politicize young workers and students from the toiling classes.',
      },
      {
        date: 'May 1929',
        organization: 'Katipunan ng mga Anakpawis sa Pilipinas (KAP)',
        description: 'A militant labor federation formed by the Evangelista tendency after conflict inside the COF; it served as the immediate organizational stepping stone from labor federation politics to the founding of the PKP in 1930.',
      },
      {
        date: 'Late 1929',
        organization: 'Kapisanan ng mga Manggagawa sa Industriya ng Tabako sa Pilipinas (KMITP)',
        description: 'A tobacco workers\' union founded during a conference attended by delegates from 32 factories. Its rise was largely responsible for a 12,000-member increase in the new trade union center\'s first year, and it quickly overtook the UTF.',
      },
      {
        date: 'Late 1929',
        organization: 'Kapisanang Pambansa ng mga Manggagawa sa Industriya Grapika sa Pilipinas (KPMIGP)',
        description: 'An industrial union established specifically for workers in the printing industry, reflecting the move toward specialized sectoral organizing within the militant labor current of the late 1920s',
      },
    ],
  },
  {
    id: 'pkp-era',
    title: 'The PKP Era and Early Communist Organizing',
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
        description: 'A nationwide student press alliance that did not belong to a single left current at birth, but later became part of the wider democratic and activist student terrain.',
      },
      {
        date: '26 October 1932',
        organization: 'Partido Sosyalista ng Pilipinas (PSP)',
        description: 'Pedro Abad Santos\'s socialist formation in Central Luzon, rooted in peasant and tenant struggles rather than urban labor alone; its later merger with the PKP fused agrarian socialism with communist party organization and helped deepen the left\'s rural base.',
      },
      {
        date: '1933',
        organization: 'Sakdal Party',
        description: 'A populist, anti-colonial movement that campaigned for "absolute, immediate, and complete" independence and radical land reform, leading to the Sakdalista uprising in 1935.',
      },
      {
        date: '1934',
        organization: 'Aguman ding Maldang Talapagobra (AMT)',
        description: 'A socialist-oriented "General Workers Union" based in Central Luzon that united peasants and laborers under the leadership of Pedro Abad Santos.',
      },
      {
        date: '1936',
        organization: 'Popular Front',
        description: 'A 1936 electoral alliance (including the SP, AMT, and KPMP) that secured significant local victories in Central Luzon. It won two municipalities in 1937 and 12 towns by 1940—including nine mayoralties in Pampanga—while Pedro Abad Santos narrowly lost the gubernatorial race.',
      },
      {
        date: '7 November 1938',
        organization: 'Partido Komunista ng Pilipinas (Merged)',
        description: 'The 1938 unification of the PKP and PSP, which joined Evangelista\'s labor-communist current with Abad Santos\'s peasant-socialist base, creating the organizational lineage that would lead into wartime resistance and the Huk movement.',
      },
      {
        date: '29 June 1939',
        organization: 'Collective Labor Movement (CLM)',
        description: 'A Marxist-oriented, left-wing labor center. It consolidated 76 accredited organizations, including the KAP, KPMP, and AMT, after workers rejected government-subsidized efforts to control the labor front. The coalition was led by a presidium of prominent figures such as Pedro Abad Santos and Luis Taruc, with Guillermo Capadocia serving as executive secretary.',
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
        date: 'February 1942',
        organization: 'United Front Movement',
        description: 'A PKP-initiated coalition aimed at uniting various sectors, including professionals and the bourgeoisie, against the Japanese occupation serving as the civilian counterpart of the Huks',
      },
      {
        date: '29 March 1942',
        organization: 'Hukbong Bayan Laban sa Hapon (HUKBALAHAP)',
        description: 'The PKP-led anti-Japanese guerrilla army in Central Luzon, forged from peasant militancy and communist organization; it linked wartime resistance to the postwar agrarian and revolutionary struggles that later continued under new names.',
      },
      {
        date: 'March 1945 / July 1945',
        organization: 'Congress of Labor Organizations (CLO)',
        description: 'A labor center organized under PKP influence to rebuild legal trade-union activity; it represented the communist movement\'s effort to complement armed struggle with mass legal labor organizing.',
      },
      {
        date: 'May 1945',
        organization: 'Pambansang Kaisahan ng mga Magbubukid (PKM)',
        description: 'A postwar national peasant union that campaigned for agrarian reform and served as the legal mass base for the Huk movement.',
      },
      {
        date: '15 July 1945',
        organization: 'Democratic Alliance (DA)',
        description: 'A broad postwar united front of left, peasant, labor, and anti-elite forces built for the 1946 elections; it showed the PKP orbit\'s tactical shift into electoral coalition-building even while repression was pushing the movement back toward armed resistance.',
      },
      {
        date: 'January 1950',
        organization: 'Hukbong Mapagpalaya ng Bayan (HMB)',
        description: 'The reorganized armed force that succeeded the wartime Huks in the postwar insurgency, reflecting the continuity of peasant-based communist resistance after the breakdown of legal openings for the DA and related left forces.',
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
        date: 'April 1959',
        organization: 'Katipunan ng Manggagawang Pilipino (KMP)',
        description: 'A union organization that held its founding congress in 1959, electing Roberto Oca as president and Ignacio Lacsina as secretary general',
      },
      {
        date: '1959 / October 1960',
        organization: 'Student Cultural Association of the University of the Philippines (SCAUP)',
        description: 'A UP-based intellectual and political formation associated with Jose Maria Sison\'s early nationalist-radical organizing; it served as one of the preparatory circles out of which the KM and later the CPP current would emerge.',
      },
      {
        date: '27 December 1960',
        organization: 'Student Christian Movement of the Philippines (SCMP)',
        description: 'An ecumenical youth and student movement advocating for national democracy and the application of faith in social struggles.',
      },
      {
        date: '3 February 1963',
        organization: 'Lapiang Manggagawa (LM)',
        description: 'A workers\' party formally launched bringing together a significant majority of the country\'s trade union federations, electing Cipriano Cid as president and Ignacio Lacsina as general secretary',
      },
      {
        date: '7 November 1964',
        organization: 'Malayang Samahan ng Magsasaka (MASAKA)',
        description: 'A peasant organization whose founding document was ratified at the NAFLU headquarters in Quiapo, electing Felixberto Olalia as its first president',
      },
      {
        date: '30 November 1964',
        organization: 'Kabataang Makabayan (KM)',
        description: 'The flagship nationalist youth organization of the late 1960s, founded by Sison and central to the rise of the national-democratic movement; it became the principal youth pipeline into the reestablished CPP, while also spawning dissident youth currents such as SDK and prompting the PKP to form MPKP.',
      },
      {
        date: '17 January 1965',
        organization: 'Consolidated Labor Party of the Philippines (CLPP)',
        description: 'Officially founded after 21 labor organizations broke away from the LM in late 1964 because the LM\'s leadership shifted support to Ferdinand Marcos instead of Diosdado Macapagal',
      },
      {
        date: '19 May 1965',
        organization: 'Bertrand Russell Peace Foundation (BRPF) - Philippine Chapter',
        description: 'Held its founding convention to oppose the US war in Vietnam after securing support from Bertrand Russell',
      },
      {
        date: '7-8 February 1967',
        organization: 'Movement for the Advancement of Nationalism (MAN)',
        description: 'A broader nationalist alliance that connected intellectuals, professionals, and activists around anti-imperialist politics; it formed part of the wider ideological environment from which both legal nationalist and revolutionary formations grew.',
      },
      {
        date: 'Mid-April 1967',
        organization: 'Nationalist Corps (NC)',
        description: 'Formed by Sixto Carlos and others to implement Mao\'s mass line by sending students to the countryside for politicalization',
      },
      {
        date: '1 May 1967',
        organization: 'Socialist Party of the Philippines (SPP)',
        description: 'Founded during a congress where the Lapiang Manggagawa (LM) officially renamed itself, with Ignacio Lacsina elected as chair',
      },
      {
        date: '19 October 1967',
        organization: 'Christian Social Movement (CSM)',
        description: 'A political movement founded by Former Senator Raul Manglapus to organize and promote Christian Democratic ideology.',
      },
      {
        date: '30 November 1967',
        organization: 'Malayang Pagkakaisa ng Kabataang Pilipino (MPKP)',
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
    id: 'revolutionary-left',
    title: 'The Reemergence of the Revolutionary Left',
    subtitle: '1968–1986',
    color: '#7c3aed',
    icon: 'Flame',
    events: [
      {
        date: '26 December 1968',
        organization: 'Communist Party of the Philippines (MLM) (CPP-MLM)',
        description: 'The reestablished Maoist communist party founded in 1968 in rupture with the PKP-1930, criticizing the latter\'s "revisionism" and placing protracted people\'s war at the center of strategy; it became the core of the modern national-democratic revolutionary bloc.',
      },
      {
        date: '29 March 1969',
        organization: 'New People\'s Army (NPA)',
        description: 'The armed wing of the CPP, established in 1969 by combining the new Maoist party with Bernabe Buscayno\'s peasant guerrilla force; it replaced the old PKP/Huk insurgent lineage with a new revolutionary military formation.',
      },
      {
        date: '15 August 1969',
        organization: 'Rural Missionaries of the Philippines (RMP)',
        description: 'The Rural Missionaries of the Philippines (RMP) is a national organization, inter-congregational and inter-diocesan in character, of women and men religious, priests and lay.',
      },
      {
        date: 'Late 1969',
        organization: 'Movement for a Democratic Philippines (MDP)',
        description: 'The MDP originated in late 1969 as an ad hoc committee of the University of the Philippines (UP) Student Council aimed at investigating electoral fraud. By February 1970, it transformed into a permanent umbrella group that coordinated the diverse progressive sectors and student groups of the Philippine left',
      },
      {
        date: '1970',
        organization: 'Liga ng mga Demokratikong Atenista',
        description: 'The first radical activist group in Ateneo, Liga ng mga Demokratikong Atenista (LDA), was established in 1970',
      },
      {
        date: '17 February 1970',
        organization: 'Lakas ng Diwang Kayumanggi (Lakasdiwa)',
        description: 'A nonviolent Filipino social-democratic current associated with Ed Garcia and other socdems during the First Quarter Storm; it occupied the space between traditional opposition liberalism and Maoist revolutionary politics, and helped shape the later PDSP/FSDM stream.',
      },
      {
        date: '18 April 1970',
        organization: 'Makabayang Kilusan ng Bagong Kababaihan (MAKIBAKA)',
        description: 'A women\'s militant organization that arose from the national-democratic upsurge, initially involving activists from KM, SDK, and related groups; it pushed women\'s liberation into the revolutionary movement and later became part of the NDF orbit.',
      },
      {
        date: 'July 1970',
        organization: 'Nationalist Businessmen\'s Association (NBA)',
        description: 'A sectoral organization aimed at spreading nationalist goals among businessmen to support national industrialization',
      },
      {
        date: '23 August 1970',
        organization: 'Kapulungan ng mga Sandigan ng Pilipinas (KASAPI)',
        description: 'A Social Democratic group formally organized by Jesuit Fr. Jose Blanco from nested secret student groups at the University of Santo Tomas',
      },
      {
        date: 'September 1970',
        organization: 'Bagong Pilipina',
        description: 'A UP-based women\'s organization tied to the SDK that sought to organize sorority members and elite women',
      },
      {
        date: '20 October 1970',
        organization: 'Zone One Tondo Organization (ZOTO)',
        description: 'A major urban-poor organization in Tondo that connected slum and relocation-site struggles to the broader anti-dictatorship and national-democratic movement, helping extend left organizing beyond campuses and factories.',
      },
      {
        date: '3-6 November 1970',
        organization: 'Student Alliance for National Democracy (STAND)',
        description: 'Created during a conference at UP Diliman to coordinate the decisions and activities of various student councils controlled by the CPP',
      },
      {
        date: '10 January 1971',
        organization: 'League of Editors for a Democratic Society (LEADS)',
        description: 'Founded to pool editorial and article writing for campus publications to ensure they followed the political line of the CPP',
      },
      {
        date: '13 January 1971',
        organization: 'Alyansa ng Bayan Laban sa Pagtaas ng Presyo ng Langis (ABLPPPL)',
        description: 'A broad, heterogeneous alliance of organizations including mass groups, civic groups, and car owners formed to protest oil price hikes',
      },
      {
        date: '15 January 1971',
        organization: 'Young Communist League (YCL)',
        description: 'Formed as the youth arm of the PKP with a central committee of nine people; it served as a training ground for future PKP members and espoused urban guerrilla tactics',
      },
      {
        date: '26 February 1971',
        organization: 'Katipunan ng mga Samahan ng mga Manggagawa (KASAMA)',
        description: 'A national democratic labor union federation founded by the KM with Virgilio San Pedro as president',
      },
      {
        date: '28 February 1971',
        organization: 'Pambasang Samahan ng Makabayang Tsuper (PSMT)',
        description: 'An umbrella organization of drivers affiliated with the KM, with Leto Villar acting as spokesperson',
      },
      {
        date: 'March 1971',
        organization: 'Katipunan ng Kababaihan para sa Kalayaan (Katipunan)',
        description: 'An umbrella women\'s organization formed by MAKIBAKA, Bagong Pilipina, and the KM Women\'s Bureau',
      },
      {
        date: '28 March 1971',
        organization: 'Katipunan ng Gurong Makabayan (KAGUMA)',
        description: 'A teachers\' formation in the nationalist-democratic current, showing how the movement was building specialized sectoral organizations alongside youth, women, labor, and urban-poor fronts.',
      },
      {
        date: '23 August 1971',
        organization: 'August 23rd Movement',
        description: 'Founded in Tarlac as a united front against US imperialism and rising prices, with signatories including the SDK, KM, and conservative Christian groups',
      },
      {
        date: '31 August 1971',
        organization: 'Movement of Concerned Citizens for Civil Liberties (MCCCL)',
        description: 'An umbrella organization formed by Sen. Jose Diokno with support from the MDP to protest Marcos\'s suspension of the writ of habeas corpus',
      },
      {
        date: 'October 1971',
        organization: 'Ugnayan ng Progresibong Manggagawa (UPM)',
        description: 'A labor federation formed when Leto Villar brought the PSMT, NAFLU, and KASAMA into an alliance',
      },
      {
        date: 'February 1972',
        organization: 'Movement for Democratic Reforms (MDR)',
        description: 'An umbrella organization created by the CPP to unite the KM, SDK, and MDP around student educational reforms',
      },
      {
        date: '1 March 1972',
        organization: 'Anti-Imperialism Movement (AIM)',
        description: 'A nationalist movement aiming to unite progressive businessmen and citizens to destroy foreign exploitation in favor of "FILIPINO capitalism"',
      },
      {
        date: '17 February 1972',
        organization: 'Christians for National Liberation (CNL)',
        description: 'A revolutionary Christian formation aligned with the national-democratic movement, linking liberationist religious activists to the CPP-NDF current and broadening the social composition of the anti-dictatorship resistance.',
      },
      {
        date: '7 July 1972',
        organization: 'Katipunan ng mga Demokratiko-Sosyalistang Pilipino (KDSP)',
        description: 'An organization formed from the merger of pre-martial law formations like Hasik Kalayaan and the Kilusan ng mga Anak-Kalayaan.',
      },
      {
        date: 'October 1972',
        organization: 'Marxist-Leninist Group (MLG)',
        description: 'A Marxist split from the PKP-1930 associated with figures like Francisco Nemenzo who opposed the old party\'s line on Marcos and martial law, the Marxist-Leninist Group (MLG) emerged in mid-October 1972 when Nemenzo transformed the party\'s youth arm, the Young Communist League (YCL), into a completely independent organization',
      },
      {
        date: '24 April 1973',
        organization: 'National Democratic Front of the Philippines (NDFP)',
        description: 'The united-front formation built under the CPP initiative to assemble sectoral revolutionary organizations under a common anti-imperialist and anti-feudal program; it served as the political umbrella linking the CPP, NPA, and allied mass organizations.',
      },
      {
        date: '1 May 1973',
        organization: 'Partido Demokratiko Sosyalista ng Pilipinas (PDSP)',
        description: 'The main party expression of Filipino social democracy during martial law, positioned against both Marcos authoritarianism and the Maoist revolutionary line; it inherited and systematized the earlier KASAPI-LAKASDIWA current.',
      },
      {
        date: '1974',
        organization: 'Aniban ng mga Manggagawa sa Agrikultura (AMA)',
        description: 'The new name adopted by MASAKA following a "national unity agreement" between Felicisimo Macapagal\'s group and the Marcos martial law regime',
      },
      {
        date: '8 March 1975',
        organization: 'Katipunan ng Bagong Pilipina (KBP)',
        description: 'A women\'s organization established the year following the political settlement of the PKP and the Marcos Regime',
      },
      {
        date: '14 December 1975',
        organization: 'Trade Union Congress of the Philippines',
        description: 'The TUCP was established on December 14, 1975, during the Martial Law era under President Ferdinand Marcos Sr. It was the product of a state-led effort to consolidate the fragmented labor movement under a single, manageable umbrella, following the "one-union, one-industry" policy envisioned in the 1974 Labor Code (Presidential Decree 442)',
      },
      {
        date: '26 December 1975',
        organization: 'Liga ng Agham para sa Bayan',
        description: 'A patriotic science-and-technology organization within the national-democratic sphere, illustrating how the movement created professional-sector bodies tied to a wider revolutionary and anti-dictatorship front.',
      },
      {
        date: '1976',
        organization: 'Samahan ng Malayang Kabataan (SMK)',
        description: 'The youth arm of the PDSP, established to reach out to the unorganized studentry.',
      },
      {
        date: '1976',
        organization: 'Nagkakaisang Partido Demokratiko-Sosyalista ng Pilipinas (NPDSP)',
        description: 'Formed from the merger of the PDSP and remnants of the student movement Lakasdiwa.',
      },
      {
        date: '27 June 1976',
        organization: 'Samahan sa Ikauunlad ng Kabataang Pilipino',
        description: 'A nationwide youth organization whose aims were the pursuit of equality, progress, and peace under the New Society Framework',
      },
      {
        date: '11 September 1977',
        organization: 'League of Filipino Students (LFS)',
        description: 'A student formation that began around democratic rights and campus repression under martial law and later became one of the most important youth organizations within the national-democratic movement, helping feed into Anakbayan in the 1990s.',
      },
      {
        date: '1978',
        organization: 'Light-A-Fire Movement',
        description: 'A small anti-Marcos urban sabotage group located closer to the political center than to the revolutionary left, showing that armed resistance to the dictatorship also existed outside the CPP and social-democratic traditions.',
      },
      {
        date: '1978',
        organization: 'Partido ng Sambayanang Pilipino (PSP)',
        description: 'A small electoral party founded by Kasapi to field candidates in open elections for the Interim Batasang Pambansa.',
      },
      {
        date: '1978',
        organization: 'LABAN (Lakas ng Bayan)',
        description: 'Ninoy Aquino\'s electoral opposition vehicle for the 1978 elections; while not a left organization in the strict sense, it became one of the central poles around which moderate, reformist, and later merged opposition formations interacted with social democrats and anti-dictatorship coalitions.',
      },
      {
        date: '28 January 1978',
        organization: 'Aniban ng mga Manggagawa sa Agrikultura (AMA)',
        description: 'A PKP-led mass organization of agricultural workers and landless peasants who had not benefited from land reform.',
      },
      {
        date: '6 December 1978',
        organization: 'Makabayang Samahang Pangkalusugan (MSP)',
        description: 'A health-sector organization aligned with the revolutionary movement, part of the NDF-style effort to build sector-specific bodies among professionals and service workers rather than relying only on party or military structures.',
      },
      {
        date: '1980',
        organization: 'April 6 Liberation Movement',
        description: 'An urban guerrilla formation created by armed elements of KASAPI with links to anti-Marcos opposition abroad, showing the social-democratic current\'s brief turn toward armed struggle outside the CPP-NPA framework.',
      },
      {
        date: 'January 1980',
        organization: 'UNIDO (United Nationalist Democratic Organization; originally United Democratic Opposition)',
        description: 'The main traditional-opposition alliance against Marcos, gathering elite and reformist anti-dictatorship currents; it interacted uneasily with social democrats and the mass-based left but became a crucial anti-Marcos electoral pole.',
      },
      {
        date: '1 May 1980',
        organization: 'Kilusang Mayo Uno (KMU)',
        description: 'A militant labor center established during martial law that organized workers within the national-democratic line; it became the major labor arm of the anti-dictatorship left and later generated breakaway currents such as the BMP after the 1992 split.',
      },
      {
        date: '1981',
        organization: 'Cordillera People\'s Democratic Front (CPDF)',
        description: 'A regional revolutionary-democratic front in the Cordillera that linked indigenous self-determination, anti-dam resistance, and the national-democratic movement; it later formed part of the political background from which the CPLA split.',
      },
      {
        date: '1981',
        organization: 'Youth for the Advancement of Faith and Justice (YAFJ)',
        description: 'An aboveground movement representing militant Christian political involvement and advocating for social democratic principles.',
      },
      {
        date: '7 June 1981',
        organization: 'PISTON (Pagkakaisa ng mga Samahan ng Tsuper at Opereytor Nationwide)',
        description: 'A national federation of transport workers and operators whose campaigns tied livelihood, fuel price, and labor questions to broader progressive politics, later becoming part of the national-democratic mass movement constellation.',
      },
      {
        date: '1982',
        organization: 'Alyansa ng Nagkakaisang Kabataan sa Komunidad (ANAK-KO)',
        description: 'ANAK-KO was a political organization composed of out-of-school youth from the communities surrounding the University of the Philippines. It was originally formed in RIPADA (Ricarte, Palaris, and Dagohoy) and later expanded to establish a chapter in Krus na Ligas. The organization actively led the community in mass actions, including the 1985 barricades against the threatened demolition of their homes',
      },
      {
        date: '6 February 1982',
        organization: 'PDP (Partido Demokratiko Pilipino)',
        description: 'A reformist anti-Marcos opposition party founded by Nene Pimentel and others, representing a democratic opposition current that later merged with LABAN and intersected with wider anti-dictatorship coalitions.',
      },
      {
        date: '26 June 1982',
        organization: 'Alliance of Concerned Teachers (ACT)',
        description: 'A teachers\' organization founded under martial law to defend educators\' welfare and democratic rights; it later became part of the broader progressive and anti-dictatorship coalition politics of the 1980s.',
      },
      {
        date: '1983',
        organization: 'Alyansa ng Kristiyanong Mag-aaral (AKMA)',
        description: 'A student alliance established by student groups to organize the youth sector.',
      },
      {
        date: 'February 1983',
        organization: 'PDP-LABAN',
        description: 'The merger of PDP and LABAN, combining two major anti-Marcos reformist-electoral currents; it became one of the principal opposition party vehicles operating alongside street coalitions such as JAJA, KAAKBAY, and ATOM.',
      },
      {
        date: 'March 1983',
        organization: 'KAAKBAY (Kilusan sa Kapangyarihan at Karapatan ng Bayan)',
        description: 'A broad umbrella for "parliament of the streets" politics under Jose Diokno, linking moderate democrats, social democrats, activists, and later coalition partners in JAJA; it was central to creating a non-CPP mass opposition line.',
      },
      {
        date: '25 August 1983',
        organization: 'JAJA (Justice for Aquino, Justice for All)',
        description: 'The first major post-assassination anti-Marcos coalition, bringing together KAAKBAY, ATOM, and a range of other democratic and progressive forces; it was a transitional umbrella through which street-based opposition politics expanded after Ninoy\'s murder.',
      },
      {
        date: '31 August 1983',
        organization: 'Concerned Artists of the Philippines (CAP)',
        description: 'An organization of writers, artists, and cultural workers advocating for freedom of expression and national democratic arts.',
      },
      {
        date: 'September 1983',
        organization: 'ATOM (August Twenty-One Movement)',
        description: 'A middle-class anti-Marcos protest movement formed after Aquino\'s assassination, closely associated with Butz Aquino; it helped draw broader urban and professional layers into the anti-dictatorship mass upsurge and collaborated with JAJA and related coalitions.',
      },
      {
        date: 'October 1983',
        organization: 'National Citizens\' Movement for Free Elections (NAMFREL)',
        description: 'An organization created to secure ballot boxes and guard elections against cheating and fraud.',
      },
      {
        date: '1984',
        organization: 'GABRIELA – NATIONAL ALLIANCE OF FILIPINO WOMEN',
        description: 'A nationwide alliance of women\'s organizations founded to resist the Marcos dictatorship and address issues of women\'s rights, trafficking, and national democracy.',
      },
      {
        date: '1984',
        organization: 'Kabataan Para Sa Demokrasya at Nasyonalismo (KADENA)',
        description: 'KADENA (Kabataan para sa Demokrasya at Nasyonalismo) was a militant mass organization that mobilized urban poor and out-of-school youth in the Philippines against the Marcos dictatorship. It served as a community-based pillar of the national democratic movement, organizing youth outside the formal education system to advocate for systemic social justice and political change.',
      },
      {
        date: 'May 1984',
        organization: 'Coalition of Organizations for the Restoration of Democracy (CORD)',
        description: 'An alliance set up to unite the remnants of JAJA following the elections',
      },
      {
        date: '5 July 1984',
        organization: 'Health Alliance for Democracy (HEAD)',
        description: 'An organization of health professionals and workers campaigning for a pro-people and comprehensive healthcare system.',
      },
      {
        date: '1 May 1985',
        organization: 'Bagong Alyansang Makabayan (BAYAN)',
        description: 'A broad anti-dictatorship alliance of national-democratic organizations founded in 1985, representing the CPP-aligned mass movement\'s attempt to consolidate workers, peasants, women, youth, urban poor, and professionals into a single legal united front; its internal tensions later helped produce the BISIG and BANDILA trajectories.',
      },
      {
        date: '24 July 1985',
        organization: 'Kilusang Magbubukid ng Pilipinas (KMP)',
        description: 'A militant peasant movement within the national-democratic orbit, built to organize for genuine land reform and rural rights; it became the principal agrarian mass organization associated with the CPP-aligned left and later experienced its own splits.',
      },
      {
        date: '4 August 1985',
        organization: 'FSDM (Filipino Social Democratic Movement)',
        description: 'A social-democratic formation launched in the last phase of the dictatorship, part of the same broad current as PDSP, KAAKBAY, and BANDILA; it helped carry the socdem current from anti-Marcos resistance into post-EDSA legal politics.',
      },
      {
        date: '13 August 1985',
        organization: 'BANDILA (Bansang Nagkakaisa sa Diwa at Layunin)',
        description: 'A multisectoral coalition established by social democratic and liberal democratic organizations after a split within the Bayan coalition.',
      },
    ]
  },
  {
    id: 'fragmentation',
    title: 'Fragmentation, Realignment, and New Left Formations',
    subtitle: '1986–1998',
    color: '#2563eb',
    icon: 'GitBranch',
    events: [
      {
        date: '1986',
        organization: 'Confederation for Unity, Recognition and Advancement of Government Employees (COURAGE)',
        description: 'A militant trade union federation representing government employees, focusing on the rights, welfare, and job security of public sector workers.',
      },
      {
        date: '6 April 1986',
        organization: 'Alex Boncayao Brigade',
        description: 'Formed in 1987, the Alex Boncayo Brigade (ABB) was an armed partisan unit controlled by the Manila-Rizal Regional Committee to conduct special urban operations, though its activities often caused friction with the party\'s General Command. Following the ideological split within the revolutionary movement during the 1990s, the ABB ultimately separated from the mainstream party and united with other rejectionist factions to form the Revolutionary Workers Party',
      },
      {
        date: '17 April 1986',
        organization: 'Cordillera People\'s Liberation Army',
        description: 'A breakaway armed formation from the CPP-NPA current in the Cordillera, rooted in disputes over indigenous autonomy, strategy, and regional leadership; its split reflected the wider tensions between national-democratic centralism and local ethnonational claims.',
      },
      {
        date: 'May 1986',
        organization: 'BISIG (Bukluran sa Ikauunlad ng Sosyalistang Isip at Gawa)',
        description: 'An open legal socialist organization that emerged from the “independent” wing of the 1985 BAYAN split, drawing from ex-PKP, non-CPP Marxist, and democratic-socialist currents; it sought a Filipino socialism distinct from both Maoist orthodoxy and traditional elite opposition, and later fed into Akbayan\'s formation.',
      },
      {
        date: 'August 1986',
        organization: 'Institute for Popular Democracy (IPD)',
        description: 'Initially conceptualized by ex-political prisoners in jail (originally proposed as the Institute for Political Democracy) to train people in coalition and election work. It was officially inaugurated by key advocates of Popular Democracy to explore and maximize the new democratic space provided by the post-Marcos regime',
      },
      {
        date: '30 August 1986',
        organization: 'Partido ng Bayan (PnB)',
        description: 'Partido ng Bayan (PnB) was a broad left-wing nationalist electoral party launched in 1986 to bring the anti-dictatorship and progressive movement into open parliamentary politics after the fall of Marcos. It became associated with the legal national-democratic current and contested the 1987 elections.',
      },
      {
        date: '26 October 1986',
        organization: 'AMIHAN - National Federation of Peasant Women',
        description: 'A national federation of peasant women and organizations advocating for genuine agrarian reform, national industrialization, and the protection of women\'s rights in the countryside. As an affiliate of the Kilusang Magbubukid ng Pilipinas (KMP) and the Bagong Alyansang Makabayan (BAYAN), it seeks to empower rural women to participate in peasant struggles and break free from systemic poverty and misogyny.',
      },
      {
        date: '18 December 1986',
        organization: 'Kongreso ng Pagkakaisa ng Maralita ng Lungsod (KPML)',
        description: 'One of the largest umbrella organizations of urban-poor community-based organizations in the Philippines. It was instrumental in negotiating with the government for a moratorium on demolitions during the post-Marcos transition, which eventually led to the creation of the Presidential Commission for the Urban Poor (PCUP). It focuses on housing rights, social services, and the political participation of the urban poor.',
      },
      {
        date: '13 January 1987',
        organization: 'Artista at Manunulat para sa Sambayanan (ARMAS)',
        description: 'A cultural-sector formation in the national-democratic movement, part of the NDF-style pattern of creating specialized organizations among artists and writers to connect cultural work with revolutionary politics.',
      },
      {
        date: '15 March 1987',
        organization: 'Pandayan para sa Sosyalistang Pilipinas (Pandayan)',
        description: 'A democratic socialist formation established to build a mass organization to advance democratic socialism.',
      },
      {
        date: 'May 1987',
        organization: 'Congress for a People\'s Agrarian Reform (CPAR)',
        description: 'An issue-based coalition of farmers and fisherfolk advocating for a genuine agrarian reform program.',
      },
      {
        date: '7 December 1987',
        organization: 'PAMALAKAYA (Pambansang Lakas ng Kilusang Mamamalakaya ng Pilipinas)',
        description: 'A national fisherfolk federation that organized small fishers around coastal rights, livelihood, and resource justice; it developed as the marine-sector counterpart to peasant and labor organizing within the broader progressive movement.',
      },
      {
        date: 'March 1988',
        organization: 'Freedom from Debt Coalition (FDC)',
        description: 'A multisectoral coalition that reframed debt and structural adjustment as mass political questions, linking post-Marcos economic critique to labor, peasant, NGO, church, and social-movement activism beyond the classic party-front model.',
      },
      {
        date: '1990',
        organization: 'Movement for Popular Democracy',
        description: 'Emerging as a direct outcome of the EDSA revolt, it was initiated by ex-political prisoners exploring alternative ways to struggle in the legal arena while operating as a "little tradition" within the overall strategic framework. In 1990, it evolved into an open, formalized political formation.',
      },
      {
        date: '1992',
        organization: 'Makabayang Kawaning Pilipino (MKP)',
        description: 'An underground revolutionary organization for government employees and state workers affiliated with the National Democratic Front (NDF).',
      },
      {
        date: '1993',
        organization: 'Rebolusyonaryong Partido ng Proletaryo (RPP)',
        description: 'A socialist current that emerged from younger cadres of the older PKP tradition, seeking to renew non-Maoist revolutionary politics; it later fused with Liga Sosyalista in the process that formed the SPP.',
      },
      {
        date: '14 September 1993',
        organization: 'Bukluran ng Manggagawang Pilipino (BMP)',
        description: 'A militant labor center created after the post-1992 left divide, especially by workers leaving the KMU sphere; it represented the fragmentation of the labor front as anti-reaffirmist currents built independent structures outside the CPP line.',
      },
      {
        date: '29 October 1993',
        organization: 'Sanlakas',
        description: 'A broad progressive coalition formed in the post-split environment to unite anti-authoritarian, left-democratic, and movement forces outside the old binary of CPP versus traditional opposition; it became one of the more visible “plural left” formations of the 1990s.',
      },
      {
        date: 'November 1993',
        organization: 'Demokratikong Kilusang Magbubukid ng Pilipinas (DKMP)',
        description: 'A peasant organization formed after conflict within the KMP, illustrating how the post-1992 split and related tactical disputes also fractured the agrarian movement, not just party and labor formations.',
      },
      {
        date: 'January 1995',
        organization: 'Isang Siglo ng Pakikibaka, Bagong Siglo ng Paglaya (SIGLAYA)',
        description: 'A formation that emerged in the mid-1990s as part of the broader realignment of the Philippine Left, illustrating the ongoing efforts to navigate the post-split political landscape through new organizational frameworks',
      },
      {
        date: 'July 1995',
        organization: 'Partido Proletaryo Demokratiko (PPD)',
        description: 'A Marxist formation of the “Third Force” current in the fragmented post-1992 left, representing those who rejected both CPP reaffirmism and looser coalition politics while still seeking a disciplined revolutionary organization.',
      },
      {
        date: '19 August 1995',
        organization: 'Karapatan',
        description: 'KARAPATAN is an alliance of individuals, groups and organizations working for the promotion and protection of human rights in the Philippines. Its founders and members have been at the forefront of the human rights struggle in the Philippines since the time of Marcos\' martial law regime.',
      },
      {
        date: '2 February 1996 / 1 May 1998',
        organization: 'Rebolusyonaryong Partido ng Manggagawa-Pilipinas (RPM-P)',
        description: 'A revolutionary workers\' party formed by anti-reaffirmist Marxist-Leninists who broke from the CPP and rejected Maoism and protracted people\'s war; it became one of the principal organized expressions of the non-CPP revolutionary left.',
      },
      {
        date: 'April 1996',
        organization: 'Revolutionary Proletarian Army',
        description: 'The armed component announced by the RPM-P, showing that anti-reaffirmist politics did not remain purely legal or electoral but also built an alternative revolutionary armed structure outside the CPP-NPA.',
      },
      {
        date: 'December 1996',
        organization: 'Migrante International',
        description: 'A global alliance of Filipino migrants formed in the wake of Flor Contemplacion, linking overseas labor, migrant rights, and national political advocacy; it expanded the left\'s social reach beyond domestic sectoral organizing.',
      },
      {
        date: '1997',
        organization: 'PADAYON',
        description: 'A pluralist and democratic socialist formation of the 1990s, part of the broader rethinking of socialist politics after the CPP split and the end of the dictatorship, and one of several efforts to build a non-dogmatic left.',
      },
      {
        date: '1997',
        organization: 'Anak Mindanao (AMIN)',
        description: 'A partylist organization established in 1997 and won seats in the House of Representatives in 2003 representing the people of Mindanao',
      },
      {
        date: 'March 1997',
        organization: 'Revolutionary Proletarian Army-Alex Boncayao Brigade (RPA-ABB)',
        description: 'The merger of the RPA with the ABB current, joining anti-reaffirmist provincial guerrilla forces with an urban armed tradition that had earlier been associated with the anti-CPP left.',
      },
      {
        date: '30 November 1997',
        organization: 'Sosyalistang Kilusan ng Manggagawa (SKM)',
        description: 'A socialist mass organization founded in Manila as a formal dissociation from Sanlakas-BMP. It seeks to organize the proletarian class through individual adherence to socialist principles rather than leader-controlled federations, rejecting Maoist and Stalinist models.',
      },
      {
        date: '30 November 1998',
        organization: 'Alab Katipunan',
        description: 'A socialist workers\' political organization in the Philippines, active in the legal mass movement and associated with the post-CPP rejectionist left. Exact founding date not clearly verified in publicly accessible sources, but it was already in existence by 1997.',
      },
      {
        date: '17 January 1998',
        organization: 'Akbayan Citizens\' Action Party',
        description: 'An electoral formation created by democratic-socialist, social-democratic, and allied progressive currents including BISIG and PANDAYAN; it represented one of the clearest moves by sections of the left from underground or extra-parliamentary politics into sustained electoral engagement.',
      },
      {
        date: '10 June 1998',
        organization: 'Kilusan para sa Pambansang Demokrasya (KPD)',
        description: 'An open mass movement associated with the “reaffirm” side of the post-split left in Central Luzon, reflecting how even within the pro-CPP camp there were disputes over the balance between clandestine work and open mass struggle.',
      },
      {
        date: '19 July 1998',
        organization: 'Liga Sosyalista',
        description: 'A socialist organization formed by cadres from the Popoy Lagman current of the post-1992 split; it later joined with the RPP in the unity process that produced the SPP, showing the recombination of non-CPP socialist tendencies.',
      },
      {
        date: 'September 1998 / April 1999',
        organization: 'Marxist-Leninist Party of the Philippines (MLPP)',
        description: 'A Central Luzon split from the CPP that retained a national-democratic framework but broke organizationally from the central party; it illustrated how some breakaways contested leadership and line without abandoning the broader ND paradigm.',
      },
      {
        date: 'September 1998',
        organization: 'Rebolusyonaryong Hukbong Bayan (RHB)',
        description: 'The armed wing of the MLPP, showing the replication of the party-army model even among splinter formations that had separated from the CPP.',
      },
      {
        date: '7 November 1998',
        organization: 'Kalipunan ng Damayang Mahihirap (KADAMAY)',
        description: 'An urban-poor alliance formed to consolidate anti-demolition, housing, and livelihood struggles, representing the continued institutionalization of sectoral mass organizing in the post-EDSA period.',
      },
      {
        date: '30 November 1998',
        organization: 'Sosyalistang Partido ng Paggawa (SPP)',
        description: 'A revolutionary socialist party formed through a left-unity effort involving ex-PKP, ex-CPP, Liga Sosyalista, and RPP currents; it was one of the most serious attempts to rebuild a non-Maoist revolutionary socialist pole after the great fragmentation of the 1990s.',
      },
      {
        date: '30 November 1998',
        organization: 'Anakbayan',
        description: 'A comprehensive youth organization formed by LFS and allied national-democratic activists to unify student and out-of-school youth organizing under one broader youth formation in the late post-dictatorship era.',
      }
    ]
  },
  {
    id: 'contemporary-left',
    title: 'Pluralization of the Contemporary Left',
    subtitle: '1999–Present',
    color: '#db2777',
    icon: 'Users',
    events: [
      {
        date: '30 January 1999',
        organization: 'Partido ng Manggagawang Pilipino (PMP)',
        description: 'A Marxist-Leninist workers\' party associated with the Popoy Lagman current after its withdrawal from the RPM-P project, reflecting the continued proliferation of post-split socialist and revolutionary organizations.',
      },
      {
        date: '24 July 1999',
        organization: 'AGHAM – Advocates of Science and Technology for the People',
        description: 'A patriotic organization of scientists and technologists advocating for national industrialization and the use of science for the benefit of the people.',
      },
      {
        date: '25 September 1999',
        organization: 'Bayan Muna',
        description: 'A progressive party-list organization that translated mass-movement politics, especially from the national-democratic current, into parliamentary representation and later became a pillar of the Makabayan electoral bloc.',
      },
      {
        date: '16 September 2000',
        organization: 'Karatula (Kabataang Artista para sa Tunay na Kalayaan)',
        description: 'A youth cultural organization that utilizes arts and literature for social advocacy and political awareness.',
      },
      {
        date: '28 October 2000',
        organization: 'Gabriela Women\'s Party',
        description: 'The electoral party-list expression of the broader GABRIELA women\'s movement, bringing women\'s mass organizing into Congress while remaining connected to a wider progressive and national-democratic ecosystem.',
      },
      {
        date: '2001',
        organization: 'Computer Professionals Union',
        description: 'A mass organization of ICT professionals and workers that promotes digital rights, open-source software, and the use of technology for social change.',
      },
      {
        date: '2001',
        organization: 'Youth for Nationalism and Democracy (YND)',
        description: 'A revival of the Youth for Nationalism and Democracy originally established in 1984, this iteration of the YND youth national-democratic mass organization is affiliated with the KPD coalition of mass organizations based in Central Luzon',
      },
      {
        date: '12 February 2001',
        organization: 'Partido Manggagawa (PM)',
        description: 'A labor-oriented party-list current linked to socialist labor leaders from the PMP/BMP milieu, representing another path by which post-split left formations entered legal electoral politics.',
      },
      {
        date: '1 May 2001',
        organization: 'Rebolusyonaryong Partido ng Manggagawa–Mindanao (RPM-M)',
        description: 'A revolutionary workers\' party formed when Mindanao committees left the RPM-P, demonstrating that fragmentation continued even within anti-reaffirmist revolutionary organizations.',
      },
      {
        date: '25 May 2001',
        organization: 'International League of People\'s Struggle (ILPS)',
        description: 'A global, anti-imperialist, and democratic formation that coordinates the struggles of various people\'s organizations worldwide. It serves as a broad front against imperialism, neoliberalism, and reaction, supporting movements for national independence, democracy, and social liberation across multiple sectors including labor, peasantry, and youth.',
      },
      {
        date: '19 June 2001',
        organization: 'Kabataan Party-list',
        description: 'The parliamentary youth wing of the national-democratic movement, closely linked to student and youth mass organizations such as Anakbayan and positioned as the congressional counterpart to street and campus organizing.',
      },
      {
        date: '1997 / 7 November 2001',
        organization: 'Partido Marxista-Leninista ng Pilipinas (PMLP)',
        description: 'A Marxist-Leninist formation associated with a “Bloke” current from the ABB/RPM-P milieu, part of the continuing differentiation of the anti-CPP revolutionary left.',
      },
      {
        date: '5 August 2002',
        organization: 'Partido ng Manggagawang Pilipino - Pinagsanib',
        description: 'A merger formation produced when PMP joined with PPD and SPP, representing another attempt to recombine fractured socialist and workers\' currents into a more coherent party project.',
      },
      {
        date: '2003',
        organization: 'Rebolusyonaryong Grupo ng mga Komunista (RGK)',
        description: 'RGK was a small Trotskyist revolutionary organization in the Philippines that advocated proletarian internationalism and socialist revolution, and aligned itself with the tradition of the Fourth International.',
      },
      {
        date: '2003',
        organization: 'Anakpawis Partylist',
        description: 'A political party representing the "toiling masses" (workers, peasants, and the urban poor) in the Philippine House of Representatives that is affiliated with the national-democratic Makabayan electoral bloc.',
      },
      {
        date: '20 January 2005',
        organization: 'Unyon ng mga Manggagawa sa Agrikultura (UMA)',
        description: 'A federation of agricultural workers\' unions campaigning for fair labor practices, wages, and land rights in the agricultural sector.',
      },
      {
        date: '27 June 2005',
        organization: 'Moro Resistance Liberation Organization (MRLO)',
        description: 'A Moro organization linked in some sources to the allied-organization milieu of the NDF, indicating the revolutionary left’s efforts to engage the Moro question through associated rather than identical political forms.',
      },
      {
        date: '29 June 2005',
        organization: 'Laban ng Masa',
        description: 'A broad coalition of socialist, labor, urban-poor, and other non-CPP left formations, first assembled as a common front and later revived electorally; it became one of the principal expressions of the democratic-socialist and plural-left camp.',
      },
      {
        date: '12 November 2005',
        organization: 'SOCIALISTA',
        description: 'A socialist-oriented political organization that emerged in the mid-2000s, reflecting the persistent efforts of non-CPP left currents to build organizational alternatives rooted in socialist principles',
      },
      {
        date: 'April 2007',
        organization: 'RPMP/RPA/ABB - Tabara-Paduano Group',
        description: 'One of the two main factions that emerged from the 2007 split in the RPM-P/RPA/ABB peace-process bloc, showing how leadership and command disputes continued to fragment anti-reaffirmist armed formations.',
      },
      {
        date: 'April 2007',
        organization: 'RPMP/RPA/ABB - Nilo Dela Cruz Group',
        description: 'The other major faction in the 2007 RPM-P/RPA/ABB split, underscoring the unstable institutional consolidation of post-CPP revolutionary alternatives.',
      },
      {
        date: '16 April 2009',
        organization: 'Makabayan coalition',
        description: 'An electoral alliance of national-democratic party-list groups that brought organizations such as Bayan Muna, Gabriela Women\'s Party, and Kabataan into a common bloc, effectively translating the BAYAN-style united-front logic into party-list competition.',
      },
      {
        date: '30 January 2009',
        organization: 'Partido Lakas ng Masa (PLM)',
        description: 'A socialist political formation built by workers, urban poor, peasants, and allied sectors in the non-CPP left, later overlapping with the broader Laban ng Masa current as part of contemporary democratic-socialist realignment.',
      },
      {
        date: 'July 2009',
        organization: 'Philippine Movement for Climate Justice (PMCJ)',
        description: 'A multisectoral movement focused on climate change, environmental protection, and holding large polluters accountable from a social justice perspective.',
      },
      {
        date: '2012',
        organization: 'Umalab Ka! (Ugnayan ng mga Maralita Laban sa Kahirapan) Partylist',
        description: 'An urban-poor party-list formation focused on poverty alleviation and housing rights, representing the translation of community-based maralita struggles into the parliamentary arena. It later rebranded itself to become the Alternatiba Partylist for the 2022 elections',
      },
      {
        date: '26 June 2013',
        organization: 'Bahaghari Philippines',
        description: 'A national democratic organization of LGBTQ+ individuals in the Philippines advocating against discrimination and for equal rights.',
      },
      {
        date: 'August 2013',
        organization: 'Sentro ng Nagkakaisa at Progresibong Manggagawa (SENTRO)',
        description: 'A major labor center formed to consolidate progressive and democratic-socialist trade unionism, serving as a significant pole for workers\' rights and social-movement unionism in the modern era',
      },
      {
        date: '8 March 2016',
        organization: 'Oriang',
        description: 'A grassroots women\'s movement named after Gregoria "Oriang" de Jesus, the Lakambini of the Katipunan. Formed as a collaboration between leaders from SANLAKAS, the Partido Lakas ng Masa (PLM), and other progressive groups.',
      },
      {
        date: '16 September 2016',
        organization: 'Panday Sining',
        description: 'Originally formed in 1964 as the cultural arm of the Kabataang Makabayan (KM), it was reestablished in 2016 as a youth artists-led national democratic mass organization.',
      },
      {
        date: '2021',
        organization: 'Alternatiba ng Masa (Alternatiba) Partylist',
        description: 'A contemporary party-list formation representing the "toiling masses," continuing the trend of progressive electoral engagement aimed at challenging traditional elite politics. It later rebranded itself to the Kamanggagawa Partylist',
      },
      {
        date: '2024',
        organization: 'Kamanggagawa (Kampihan ng mga Maralita at Manggagawa) Partylist',
        description: 'A new electoral vehicle for urban poor and labor sectors, designed to integrate grassroots community organizing with legislative advocacy for marginalized workers.',
      },
      {
        date: '24 January 2024',
        organization: 'Partido Sosyalista',
        description: 'A new open socialist party launched in 2024 that seeks to rebuild explicit socialist politics through above-ground organizing; it stands in continuity with earlier non-CPP socialist and democratic-socialist traditions such as BISIG, SPP, and Laban ng Masa while responding to the present conjuncture.',
      }
    ]
  }
];
