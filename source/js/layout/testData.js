let testData = [{
    "sta": "0000",
    "ver": "20220124072142",
    "lis": [{
        "ads": "Tingkat 1-2, 12-16, Bangunan KWSP, Jalan Dato' Dalam, 80000, Johor Bahru, Johor Darul Takzim, Malaysia",
        "efd": "2017-02-22 00:00:00.0",
        "ste": "01",
        "lon": 103.758697,
        "nam": "Johor Bahru",
        "fax": "07-2228234",
        "key": "00101",
        "lat": 1.461468
    }, {
        "ads": "No. 6 & 8, Jalan Sulaiman  83000 Batu Pahat, Johor Darul Takzim",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "01",
        "lon": 102.931331,
        "nam": "Batu Pahat",
        "fax": "07-4341170",
        "key": "00102",
        "lat": 1.849373
    }, {
        "ads": "No.8 & 10 , Tingkat ,1 & 2, Jalan Haji Manan, 86000, Kluang, Johor Darul Takzim, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "01",
        "lon": 103.32,
        "nam": "Kluang",
        "fax": "07-7720801",
        "key": "00103",
        "lat": 2.03428
    }, {
        "ads": "Tingkat Bawah, 1, 2 & 3, No. 9, Jalan Petrie, 84000, Muar, Johor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "01",
        "lon": 102.563756,
        "nam": "Muar",
        "fax": "06-9538340/8341",
        "key": "00104",
        "lat": 2.046047
    }, {
        "ads": "No. 5 & 6, Jalan Genuang Perdana, Taman Genuang Perdana, 85000, Segamat, Johor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "01",
        "lon": 102.845164,
        "nam": "Segamat",
        "fax": "07-9437615",
        "key": "00105",
        "lat": 2.490775
    }, {
        "ads": "Lot. No. 2,  Bandar Tepian Sungai, Jalan Jemaluang, 86800, Mersing, Johor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "01",
        "lon": 103.84525,
        "nam": "Mersing",
        "fax": "07-7982644",
        "key": "00106",
        "lat": 2.417167
    }, {
        "ads": "No. 259 & 260, Jalan Kenanga 29/8, Indahpura, 81000 Kulai Johor",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "01",
        "lon": 103.615742,
        "nam": "Kulai",
        "fax": "07-6625924",
        "key": "00108",
        "lat": 1.640592
    }, {
        "ads": "Aras Bawah, Mezzanine, 8 & 9, Bangunan KWSP Peladang, No. 33, Jalan Sultan Badlishah, 05000, Alor Setar, Kedah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "02",
        "lon": 100.367888,
        "nam": "Alor Setar",
        "fax": "04-7311395",
        "key": "00201",
        "lat": 6.118921
    }, {
        "ads": "Tingkat Bawah & 1, Wisma Keladi, No. 11A, Jalan Bank 08000, Sungai Petani, Kedah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "02",
        "lon": 100.488285,
        "nam": "Sungai Petani",
        "fax": "04-4224200",
        "key": "00202",
        "lat": 5.642433
    }, {
        "ads": "Tingkat Bawah, Blok Podium, Bangunan KWSP, Jalan Bukit Lagi,  01000, Kangar, Perlis, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "09",
        "lon": 100.193167,
        "nam": "Kangar",
        "fax": "04-9767996",
        "key": "00203",
        "lat": 6.435742
    }, {
        "ads": "No.25(GF-1), Langkawi City, Mukim Kuah, 07000 Langkawi, Kedah.",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "02",
        "lon": 99.848652,
        "nam": "Langkawi",
        "fax": "04-9663453",
        "key": "00204",
        "lat": 6.320378
    }, {
        "ads": "NO. 33 & 34, Persiaran 7, Kulim Avenue, Kulim Hi-Tech Park, 09000 Kulim, Kedah Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "02",
        "lon": 100.571761,
        "nam": "Kulim",
        "fax": "04-4034603",
        "key": "00205",
        "lat": 5.386766
    }, {
        "ads": "KWSP Kota Bharu, Tingkat 2, 3 & 5, Bangunan KWSP, Jalan Padang Garong 15000, Kota Bharu, Kelantan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "03",
        "lon": 102.240754,
        "nam": "Kota Bharu",
        "fax": "09-7448806",
        "key": "00301",
        "lat": 6.128002
    }, {
        "ads": "Lot 655, Jalan Hospital 17500 Tanah Merah, Kelantan Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "03",
        "lon": 102.149186,
        "nam": "Tanah Merah",
        "fax": "09-9553400",
        "key": "00302",
        "lat": 5.809974
    }, {
        "ads": "Lot PT 5556, Taman Yani, 18000, Kuala Krai, Kelantan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "03",
        "lon": 102.205922,
        "nam": "Kuala Krai",
        "fax": "09-9665010",
        "key": "00303",
        "lat": 5.539513
    }, {
        "ads": "KWSP Bandar Melaka, Bangunan KWSP, Jalan MITC, Hang Tuah Jaya, 75450, Ayer Keroh, Melaka, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "04",
        "lon": 102.286522,
        "nam": "Melaka",
        "fax": "06-2324585",
        "key": "00401",
        "lat": 2.274066
    }, {
        "ads": "8670-Lot 10, Kompleks Perniagaan Alor Gajah, Jalan Besar 78000, Alor Gajah, Melaka, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "04",
        "lon": 102.21016,
        "nam": "Alor Gajah",
        "fax": "06-5565915",
        "key": "00402",
        "lat": 2.3819
    }, {
        "ads": "C 538, Jalan Bestari 5, Bandar Jasin Bestari Seksyen 2, 77200 Bemban, Melaka, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "04",
        "lon": 102.39305,
        "nam": "Jasin",
        "fax": "06-5216090",
        "key": "00403",
        "lat": 2.277432
    }, {
        "ads": "No 1 Jalan Dato' As Dawood 70100, Seremban, Negeri Sembilan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "05",
        "lon": 101.943568,
        "nam": "Seremban",
        "fax": "06-7619863",
        "key": "00501",
        "lat": 2.719514
    }, {
        "ads": "No. 4, 5 & 6, Jalan Kiara 1, Pusat Perniagaan Kiara, 72100, Bahau, Negeri Sembilan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "05",
        "lon": 102.396532,
        "nam": "Bahau",
        "fax": "06-4546349",
        "key": "00502",
        "lat": 2.81015
    }, {
        "ads": "D\u2019Nilai Convention Mall, No. G-6 & M-6, PT 9946, Jalan BBN 1/3F, Bandar Baru Nilai, Negeri Sembilan.",
        "efd": "2017-12-18 00:00:00.0",
        "ste": "05",
        "lon": 101.7924,
        "nam": "Nilai",
        "fax": "06-7953357",
        "key": "00503",
        "lat": 2.82202
    }, {
        "ads": "Bangunan KWSP Pahang, Persiaran KWSP, Bandar Indera Mahkota 25200, Kuantan, Pahang, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "06",
        "lon": 103.298328,
        "nam": "Kuantan",
        "fax": "09-5739870",
        "key": "00601",
        "lat": 3.832408
    }, {
        "ads": "No. 79, Jalan Tun Razak, 27600, Raub, Pahang, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "06",
        "lon": 101.857494,
        "nam": "Raub",
        "fax": "09-3557715",
        "key": "00602",
        "lat": 3.790905
    }, {
        "ads": "No 128B (GF, 1F dan 2F) dan No 128A (GF)\r\nPersiaran Damai 1, Damai Court\r\nTemerloh, Pahang",
        "efd": "2020-09-21 00:00:00.0",
        "ste": "06",
        "lon": 102.419838,
        "nam": "Temerloh",
        "fax": "09-2964143",
        "key": "00603",
        "lat": 3.440249
    }, {
        "ads": "Tingkat Bawah, No. 1 & 2, Lorong Wawasan 3, Taman Wawasan 27000 Jerantut, Pahang, Malaysia",
        "efd": "2021-11-12 00:00:00.0",
        "ste": "06",
        "lon": 102.381734,
        "nam": "Jerantut",
        "fax": "09-2671354",
        "key": "00604",
        "lat": 3.928703
    }, {
        "ads": "Tingkat Bawah & Tingkat 1, No. 10, Lorong Peramu Permai 1, Taman Peramu Permai, 26600 Pekan, Pahang, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "06",
        "lon": 103.381203,
        "nam": "Pekan",
        "fax": "09-4264405",
        "key": "00605",
        "lat": 3.551154
    }, {
        "ads": "Bangunan KWSP, No. 3009, Off Lebuh Tenggiri 2, Bandar Seberang Jaya, 13700, Seberang Jaya, Pulau Pinang, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "07",
        "lon": 100.397658,
        "nam": "Seberang Jaya",
        "fax": "04-3999945",
        "key": "00701",
        "lat": 5.39424
    }, {
        "ads": "KWSP Georgetown Tingkat 3 & 4, Menara KWSP, 38, Jalan Sultan Ahmad Shah, 10050, Georgetown, Pulau Pinang, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "07",
        "lon": 100.330759,
        "nam": "George Town",
        "fax": "04-2268900",
        "key": "00702",
        "lat": 5.424024
    }, {
        "ads": "Tingkat Bawah & Tingkat 1, Blok F-2, Lorong Bayan Indah 1, Bay Avenue, 11900, Bayan Baru, Pulau Pinang, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "07",
        "lon": 100.308249,
        "nam": "Bayan Baru",
        "fax": "04-6430455",
        "key": "00703",
        "lat": 5.33757
    }, {
        "ads": "Tingkat Bawah, 5, 6, 7 & 8, Bangunan KWSP, Jalan Greentown, 30450, Ipoh, Perak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "08",
        "lon": 101.093874,
        "nam": "Ipoh",
        "fax": "05-2430000",
        "key": "00801",
        "lat": 4.602434
    }, {
        "ads": "No. 260 & 261, Jalan PPMP 3/4, Pusat Perniagaan Manjung Point 3, 32040 Seri Manjung, Perak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "08",
        "lon": 100.670388,
        "nam": "Manjung",
        "fax": "05-6883133",
        "key": "00802",
        "lat": 4.217725
    }, {
        "ads": "No. 37 (GF-2) & No. 39 (GF), Persiaran TBC, Taiping Business Centre Jalan Tupai, 34000 Taiping, Perak.",
        "efd": "2019-02-04 00:00:00.0",
        "ste": "08",
        "lon": 100.749533,
        "nam": "Taiping",
        "fax": "05-8066817",
        "key": "00803",
        "lat": 4.839668
    }, {
        "ads": "No 23, Lorong Perwira M1/38,\r\nTaman Nanas, Jalan Changkat Jong,\r\n36000 Teluk Intan, Perak",
        "efd": "2022-01-24 00:00:00.0",
        "ste": "08",
        "lon": 101.044137,
        "nam": "Teluk Intan",
        "fax": "05-6210500",
        "key": "00804",
        "lat": 4.002052
    }, {
        "ads": "No. 8B, Tingkat Bawah, Jalan Raja Chulan, 33000, Kuala Kangsar, Perak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "08",
        "lon": 100.941475,
        "nam": "Kuala Kangsar",
        "fax": "05-7762139",
        "key": "00805",
        "lat": 4.777508
    }, {
        "ads": "NO. 2 & 4, JALAN WAWASAN 1, TAMAN WAWASAN JAYA, 34200 PARIT BUNTAR, PERAK.",
        "efd": "2017-10-06 00:00:00.0",
        "ste": "08",
        "lon": 100.482803,
        "nam": "Parit Buntar",
        "fax": "05-7152421",
        "key": "00807",
        "lat": 5.11336
    }, {
        "ads": "PJX-HM Shah Tower, Lot A Ground Level, No. 16A Persiaran Barat, 46050, Petaling Jaya, Selangor, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "10",
        "lon": 101.645617,
        "nam": "Petaling Jaya",
        "fax": "03-79321860",
        "key": "01001",
        "lat": 3.104927
    }, {
        "ads": "KWSP Kajang Tingkat Bawah, Mezzanine, 1, 2 & 3 No. 1, Jalan Hentian 3, Pusat Hentian Kajang, Jalan Reko 43000, Kajang, Selangor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "10",
        "lon": 101.791892,
        "nam": "Kajang",
        "fax": "03-87370261",
        "key": "01002",
        "lat": 2.957656
    }, {
        "ads": "Tingkat Bawah dan Satu, Unit B-G-1, North Tower (Tower B), BBT One The Towers, Lebuh Batu Nilam 1,  Bandar Bukit Tinggi,  41200, Klang, Selangor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "10",
        "lon": 101.440844,
        "nam": "Klang",
        "fax": "03-33251615",
        "key": "01003",
        "lat": 3.00775
    }, {
        "ads": "Tingkat G, 1 & 2, Corporate Tower IDCC Shah Alam, Jalan Pahat L 15/L, 40200, Shah Alam, Selangor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "10",
        "lon": 101.524495,
        "nam": "Shah Alam",
        "fax": "03-55450236",
        "key": "01004",
        "lat": 3.065616
    }, {
        "ads": "Lot 5, Sunway Batu Caves, 68100, Batu Caves, Selangor, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "10",
        "lon": 101.69113,
        "nam": "Gombak",
        "fax": "03-61850785",
        "key": "01005",
        "lat": 3.236359
    }, {
        "ads": "No 3A, The Prime @ Dataran Puchong, Taman Puchong Utama, 47100 Puchong, Selangor",
        "efd": "2020-12-07 00:00:00.0",
        "ste": "10",
        "lon": 101.61802,
        "nam": "Puchong",
        "fax": "03-80663084",
        "key": "01006",
        "lat": 2.991933
    }, {
        "ads": "No. 3S-10-G & 3S-10-1 Rawang One, Jalan Pintas Rawang 48000 Rawang, Selangor Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "10",
        "lon": 101.578396,
        "nam": "Rawang",
        "fax": "03-60920054",
        "key": "01007",
        "lat": 3.319344
    }, {
        "ads": "Tingkat GF & 1, No. 1, Jalan Medan Niaga 6, Medan Niaga, 45000 Kuala Selangor",
        "efd": "2018-02-02 00:00:00.0",
        "ste": "10",
        "lon": 101.271026,
        "nam": "Kuala Selangor",
        "fax": "03-32898257",
        "key": "01008",
        "lat": 3.318496
    }, {
        "ads": "Bangunan KWSP, Jalan Kemajuan, Padang Hiliran, 21100, Kuala Terengganu, Terengganu, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "11",
        "lon": 103.129981,
        "nam": "Kuala Terengganu",
        "fax": "09-6228606/692",
        "key": "01101",
        "lat": 5.312837
    }, {
        "ads": "Tingkat Bawah & Tingkat 1, PT 10720 & 10721, Taman Cukai Utama Fasa 4, Jln Kubang Kurus, 24000, Kemaman, Terengganu, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "11",
        "lon": 103.418594,
        "nam": "Kemaman",
        "fax": "09-8598435",
        "key": "01102",
        "lat": 4.220381
    }, {
        "ads": "KWSP Jerteh, Tingkat GF & 1, Lot 226, Jalan Dato Kamaruddin, 22000 Jerteh, Terengganu, Malaysia",
        "efd": "2018-04-20 00:00:00.0",
        "ste": "11",
        "lon": 102.49374,
        "nam": "Jerteh",
        "fax": "09-6903198",
        "key": "01103",
        "lat": 5.73607
    }, {
        "ads": "Tingkat GF & 1 Lot PT 15824 (Unit 22), Sura Gate Commercial Centre, Jalan Sura Jeti, 23000, Dungun, Terengganu, Malaysia",
        "efd": "2018-02-10 00:00:00.0",
        "ste": "11",
        "lon": 103.419445,
        "nam": "Dungun",
        "fax": "09-8443269",
        "key": "01104",
        "lat": 4.754323
    }, {
        "ads": "Blok A, Bangunan KWSP, Lot 49, Jalan Karamunsing,  88598, Kota Kinabalu, Sabah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "12",
        "lon": 116.072686,
        "nam": "Kota Kinabalu",
        "fax": "088-234492",
        "key": "01201",
        "lat": 5.967621
    }, {
        "ads": "Lot 3A & 5, Midtown Plaza\r\nBatu 4, Jalan Lintas Utara,\r\n90000 Sandakan,  Sabah, Malaysia",
        "efd": "2017-11-25 00:00:00.0",
        "ste": "12",
        "lon": 118.083374,
        "nam": "Sandakan",
        "fax": "089-464956",
        "key": "01202",
        "lat": 5.863611
    }, {
        "ads": "Tingkat Bawah & 1, TB - 308, Blok 35, Bangunan KWSP, Kompleks Fajar, Jalan Lembaga, 91000, Tawau, Sabah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "12",
        "lon": 117.891867,
        "nam": "Tawau",
        "fax": "089-762051",
        "key": "01203",
        "lat": 4.245408
    }, {
        "ads": "Beg Berkunci 20, Jalan Masak, 89009, Keningau, Sabah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "12",
        "lon": 116.795654,
        "nam": "Keningau",
        "fax": "087-337825",
        "key": "01204",
        "lat": 5.378132
    }, {
        "ads": "Tingkat Bawah, Lot E004\r\n Financial Park Labuan, Jalan Merdeka\r\n 87000 Labuan, Sabah, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "16",
        "lon": 115.249302,
        "nam": "Labuan",
        "fax": "087-424816",
        "key": "01205",
        "lat": 5.276456
    }, {
        "ads": "Bangunan KWSP, MDLD 3330, Lot 65, Kompleks Fajar, Jalan Segama, 91126, Lahad Datu, Sabah, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "12",
        "lon": 118.325497,
        "nam": "Lahad Datu",
        "fax": "089-880808",
        "key": "01206",
        "lat": 5.02878
    }, {
        "ads": "Lot No. 2, Taman WTK Fasa II, Jalan Tandek, 89100, Kota Marudu, Sabah, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "12",
        "lon": 116.773634,
        "nam": "Kota Marudu",
        "fax": "088-662845",
        "key": "01207",
        "lat": 6.494514
    }, {
        "ads": "Tingkat GF & FF , Unit No. A-005,Blok A, Beaufort Square Avenue 2, Jalan Binunuk, 89800 Beaufort, Sabah",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "12",
        "lon": 115.740176,
        "nam": "Beaufort",
        "fax": "087-224642",
        "key": "01208",
        "lat": 5.34323
    }, {
        "ads": "Tingkat Bawah, Lot 1, Blok G, Jalan Mawar, Pekan Tomborungus, 89058 Kudat, Sabah Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "12",
        "lon": 116.852335,
        "nam": "Kudat",
        "fax": "088-622823",
        "key": "01209",
        "lat": 6.879202
    }, {
        "ads": "Bangunan KWSP, Jalan Uplands, Beg Berkunci 2089, 93598, Kuching, Sarawak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "13",
        "lon": 110.35795,
        "nam": "Kuching",
        "fax": "082-427899",
        "key": "01301",
        "lat": 1.530278
    }, {
        "ads": "Lot 1225,  Tingkat Bawah & Aras 1, Blok 10, MCLD Centre Point,  Jalan Melayu,  98008, Miri, Sarawak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "13",
        "lon": 113.985327,
        "nam": "Miri",
        "fax": "085-420086",
        "key": "01302",
        "lat": 4.388416
    }, {
        "ads": "No. 10-12, Tingkat Bawah & 1 Lorong Kampung Datu 5, Jalan Kampung Datu, P.O. Box 1797 96000, Sibu, Sarawak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "13",
        "lon": 111.822549,
        "nam": "Sibu",
        "fax": "084-327444",
        "key": "01303",
        "lat": 2.293055
    }, {
        "ads": "Blok E, Sublot 7, Naim Bintulu Paragon\r\nNo. 1, Old Airport Place, 97000 Bintulu\r\nSarawak, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "13",
        "lon": 113.049816,
        "nam": "Bintulu",
        "fax": "086-312910",
        "key": "01304",
        "lat": 3.168849
    }, {
        "ads": "Lot 1565, Tingkat Bawah, Jalan Buangsiol, 98700, Limbang, Sarawak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "13",
        "lon": 115.006395,
        "nam": "Limbang",
        "fax": "085-213051",
        "key": "01305",
        "lat": 4.758127
    }, {
        "ads": "Tingkat GF & 1, No. 5, Jalan Nenas, 96100, Sarikei, Sarawak, Malaysia",
        "efd": "2018-04-27 00:00:00.0",
        "ste": "13",
        "lon": 111.52237,
        "nam": "Sarikei",
        "fax": "084-656455",
        "key": "01306",
        "lat": 2.129544
    }, {
        "ads": "Tingkat Bawah Lot 654, Blok 3, Daerah Bandar Simanggang, Jalan Hospital, 95000, Sri Aman, Sarawak, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "13",
        "lon": 111.462197,
        "nam": "Sri Aman",
        "fax": "083-325188",
        "key": "01307",
        "lat": 1.235568
    }, {
        "ads": "Tingkat Bawah Bangunan KWSP, Jalan Raja Laut 50350, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "efd": "2012-04-12 00:00:00.0",
        "ste": "14",
        "lon": 101.694895,
        "nam": "Kuala Lumpur",
        "fax": "03-26988213",
        "key": "01401",
        "lat": 3.153725
    }, {
        "ads": "No. 2, Jalan Radin Bagus 6, Bandar Baru Seri Petaling, 57000, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "14",
        "lon": 101.692925,
        "nam": "Seri Petaling",
        "fax": "03-90546704",
        "key": "01402",
        "lat": 3.071012
    }, {
        "ads": "No 1 & 3, Jalan Laman Rimbunan Raya 1, Laman Rimbunan, 52100 Kepong, Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "14",
        "lon": 101.651606,
        "nam": "Kepong",
        "fax": "03-61793080",
        "key": "01403",
        "lat": 3.209951
    }, {
        "ads": "No 32A, Dataran Wangsa, Wangsa Melawati 53300 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
        "efd": "2012-04-12 18:02:50.49",
        "ste": "14",
        "lon": 101.743188,
        "nam": "Wangsa Maju",
        "fax": "03-41435488",
        "key": "01405",
        "lat": 3.209415
    }],
    "sti": 0,
    "sid": "3"
}];

export default testData;