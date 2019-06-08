export default {
    // 1: Admin
    // 2: Client
    // 3: Accountant
    // 4: Receptionist
    // 5: Mechanic
    items1: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: "icon-speedometer",
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            name: "TRA CỨU KHÁCH HÀNG",
            url:"/user-management/search",
            icon: "icon-puzzle"
        },
        {
            name : "QUẢN LÝ XE",
            url:"/car-management",
            icon: "icon-star",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu xe",
                    url:"/car-management/search",
                    icon: "icon-star",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Danh sách xe đang xử lý",
                    url :"/car-management/list-car-handling",
                    icon:"icon-star",
                    // roles: ["ADMIN"]
                }

            ]
        },
        {
            name : "QUẢN LÝ PHỤ TÙNG",
            url:"/material-management",
            icon: "icon-energy",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu phụ tùng",
                    url:"/material-management/search",
                    icon: "icon-energy",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lịch sử nhập phụ tùng",
                    url :"/material-management/history",
                    icon:"icon-energy",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "QUẢN LÝ HÓA ĐƠN",
            url:"/bill-management",
            icon: "icon-note",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập hóa đơn",
                    url:"/bill-management/create-bill",
                    icon: "icon-note",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Tra cứu hóa đơn",
                    url :"/bill-management/history",
                    icon:"icon-note",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "BÁO CÁO",
            url:"/report-management",
            icon: "icon-calculator",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập báo cáo tồn",
                    url:"/report-management/create-report-inventory",
                    icon: "icon-calculator",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lập báo cáo doanh thu",
                    url :"/report-management/create-report-revenue",
                    icon:"icon-calculator",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "ADMIN",
            url:"/admin-management",
            icon: "icon-layers",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Quản lý user",
                    url:"/admin-management/user-management",
                    icon: "icon-layers",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Quản lý roles",
                    url :"/admin-management/role-management",
                    icon:"icon-layers",
                    // roles: ["ADMIN"]
                }
            ]
        }

    ],
    items2: [
        {
            name: "Thông tin khách hàng",
            url :"/client/client-info",
            icon:"icon-puzzle",
            // roles: ["ADMIN"]
        },
        {
            name: "Thông tin xe xử lý",
            url :"/client/car-handling",
            icon:"icon-star",
            // roles: ["ADMIN"]
        },
        {
            name: "Lịch sử giao dịch",
            url :"/client/history",
            icon:"icon-puzzle",
            // roles: ["ADMIN"]
        }

    ],

    items3: [
        {
            name : "QUẢN LÝ PHỤ TÙNG",
            url:"/material-management",
            icon: "icon-energy",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu phụ tùng",
                    url:"/material-management/search",
                    icon: "icon-energy",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lịch sử nhập phụ tùng",
                    url :"/material-management/history",
                    icon:"icon-energy",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "QUẢN LÝ HÓA ĐƠN",
            url:"/bill-management",
            icon: "icon-note",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập hóa đơn",
                    url:"/bill-management/create-bill",
                    icon: "icon-note",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Tra cứu hóa đơn",
                    url :"/bill-management/history",
                    icon:"icon-note",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "BÁO CÁO",
            url:"/report-management",
            icon: "icon-calculator",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập báo cáo tồn",
                    url:"/report-management/create-report-inventory",
                    icon: "icon-calculator",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lập báo cáo doanh thu",
                    url :"/report-management/create-report-revenue",
                    icon:"icon-calculator",
                    // roles: ["ADMIN"]
                }
            ]
        },
    ],

    items4: [
        {
            name : "Tra cứu khách hàng",
            url:"/user-management/search",
            icon: "icon-puzzle",
        },
        {
            name : "Tra cứu xe ",
            url:"/car-management/search",
            icon: "icon-star",
        }
    ],



    items5: [
        {
            name: "Danh sách xe đang xử lý",
            url :"/car-management/list-car-handling",
            icon:"icon-star",
        }
    ]




};
