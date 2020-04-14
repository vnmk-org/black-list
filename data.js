const blackList = [
    {
        "name": "Trần Đăng Đức",
        "fbid": "100008997644780",
        "phone": "0911077222",
        "bank": ["Vietcombank 0441000701123"],
        "description": "Bán đồ không đúng miêu tả, không đúng giá niêm yết( giao dịch), có dấu hiệu lừa đảo nhiều vụ",
        "post": "https://www.facebook.com/groups/chobanphimcovietnam/permalink/238394189854411/",
    },
    {
        "name": "Tuấn Minh",
        "fbid": "100003197925172",
        "phone": "01223221392",
        "address": "65/2 Đường 6 Phường Bình Hưng Hòa A, Quận Bình Tân, HCM ( nhà cửa màu đen)",
        "description": "Scam, cò quay",
        "post": "https://www.facebook.com/groups/chobanphimcovietnam/permalink/256032358090594/",
    },
    {
        "name": "Văn Hà",
        "fbid": "100000320895890",
        "phone": "0938727876",
        "description": "Scam",
        "post": "https://www.facebook.com/groups/chobanphimcovietnam/permalink/258181924542304/",
    },
    {
        "name": "Stan Nguyễn (Nguyễn Quốc Tân)",
        "fbid": "100000134809296",
        "phone": "0934016907",
        "bank": ["Vietcombank 0371000472398"],
        "address": "21/1/16 Nguyễn Thiện Thuật, P2, Q3, Tp.HCM",
        "description": "Cò quay, có dấu hiệu lừa đảo",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/482092418853176/?sale_post_id=482092418853176",
        "tags": ["keycap", "Hotkey Project"]
    },
    {
        "name": "Đào Huy Toàn (Nguyễn Cường)",
        "fbid": "100009949444077",
        "phone": "0978621816",
        "address": "Chợ gốm Bát Tràng, xã Bát Tràng, Hà Nội",
        "description": "Bán hàng không đúng chất lượng cam kết, không giữ giao kèo trước khi bán hàng, trốn tránh",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/501902450205506/?sale_post_id=501902450205506",
    },
    {
        "name": "Tô Thái Duy (Duy Duyy)",
        "fbid": "100005679371491",
        "phone": "0935604864",
        "address": "Đà Nẵng",
        "description": "Bán hàng thiếu nút, cò quay trốn tránh",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/507634356298982/",
    },
    {
        "name": "Hùng Nguyễn",
        "fbid": "100003092993884",
        "description": "Bán hàng sai mô tả, cò quay trốn tránh",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/883257268736687/",
    },
    {
        "name": "Ngọc An",
        "fbid": "100004345661017",
        "address": "Lào Cai",
        "description": "Dồn đơn order nhưng trả hàng và xử lý chậm, có dầu hiệu lừa đảo",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/883257268736687/",
    },
    {
        "name": "Hoàng Can (Ken Diamond)",
        "fbid": "100005827390262",
        "description": "Đùn đẩy trách nhiệm",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/883257268736687/",
        "clone": [
            "https://www.facebook.com/ken.auth.05",
            "https://www.facebook.com/ken.diamond.1905"
        ],
        "tags": []
    },
    {
        "name": "Hoàng Hiệu",
        "fbid": "100027237950263",
        "phone": "0365331420",
        "bank": ["Techcombank 19034563727015"],
        "address": "26/71 ngõ 120 Vĩnh Tuy, HN",
        "description": "Bán hàng sai mô tả, bọc hàng không cẩn thận, Bàn keycap thiêu nút trốn tránh trách nhiệm",
        "posts": [
            "https://www.facebook.com/groups/vnmkmarket/permalink/1026984984363914/",
            "https://www.facebook.com/groups/vnmkmarket/permalink/1027780330951046/",
            "https://www.facebook.com/photo.php?fbid=1123698157967056&set=p.1123698157967056&type=3&theater"
        ],
        "tags": ["Hoàng Văn Hiệu"]
    },
    {
        "name": "Gì Thế Bọn Kia",
        "fbid": "100008634793902",
        "description": "clone Hoàng Hiệu",
        "post": "https://www.facebook.com/photo.php?fbid=1123698157967056&set=p.1123698157967056&type=3&theater",
        "tags": ["Hoàng Hiệu"]
    },
    {
        "name": "Nguyễn Hoài Nam",
        "fbid": "1377221220",
        "description": "Làm ngơ sự việc, trốn tránh trách nhiệm",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/1026905094371903/",
    },
    {
        "name": "Huỳnh Tâm (Team DGX)",
        "fbid": "692786229",
        "phone": "0989925822",
        "address": "12/9 Lữ Gia ,Thành phố Hồ Chí Minh",
        "description": "Xử lý đơn hàng chậm trễ, làm việc thiếu chuyên nghiệp, có dấu hiệu lừa đảo",
        "posts": [
            "https://www.facebook.com/groups/vnmkmarket/permalink/1026905094371903/",
            "https://www.facebook.com/groups/VietNamMechKey/permalink/947104045621692/",
            "https://www.facebook.com/groups/VietNamMechKey/permalink/918332245165539/",
            "https://www.facebook.com/groups/VietNamMechKey/permalink/918008658531231/"
        ],
        "tags": ["DGX"]
    },
    {
        "name": "Quản Tuấn Anh (Team MAB - Make a board)",
        "fbid": "100000631940518",
        "phone": "0974316416",
        "address": "130d Thụy Khuê, Tây Hồ, Hà Nội",
        "description": "Lừa đảo",
        "post": "https://www.facebook.com/groups/VietNamMechKey/permalink/918332245165539/",
        "tags": ["mab", "make a board", "râu", "Thịnh Đinh", "anh tuan quan"]
    },
    {
        "name": "Phạm Đăng Khôi",
        "fbid": "100017087058366",
        "phone": "0886547577",
        "description": "lừa đảo",
        "post": "https://www.facebook.com/groups/vnmkmarket/permalink/1028257647569981/",
    }
];