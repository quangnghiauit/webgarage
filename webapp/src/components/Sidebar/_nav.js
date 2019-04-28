export default {
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
            name : "QUẢN LÝ KHÁCH HÀNG",
            url:"/user-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu khách hàng",
                    url:"/user-management/search",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Thông tin khách hàng",
                    url :"/user-management/user-info",
                    icon:"",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lịch sử giao dịch",
                    url :"/user-management/history",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "QUẢN LÝ XE",
            url:"/car-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu xe",
                    url:"/car-management/search",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Thông tin xe xử lý",
                    url :"/car-management/car-handle-info",
                    icon:"",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Xử lý xe",
                    url :"/car-management/car-handle-list",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "QUẢN LÝ PHỤ TÙNG",
            url:"/material-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Tra cứu phụ tùng",
                    url:"/material-management/search",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lịch sử nhập phụ tùng",
                    url :"/material-management/history",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "QUẢN LÝ HÓA ĐƠN",
            url:"/bill-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập hóa đơn",
                    url:"/bill-management/create-bill",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Tra cứu hóa đơn",
                    url :"/bill-management/history",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "BÁO CÁO",
            url:"/report-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Lập báo cáo tồn",
                    url:"/report-management/create-report-inventory",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Lập báo cáo doanh thu",
                    url :"/report-management/create-report-revenue",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        },
        {
            name : "ADMIN",
            url:"/admin-management",
            icon: "icon-speedometer",
            // roles:["ADMIN"],
            children: [
                {
                    name: "Quản lý user",
                    url:"/admin-management/user-management",
                    icon: "",
                    // roles: ["ADMIN"]
                },
                {
                    name: "Quản lý roles",
                    url :"/admin-management/role-management",
                    icon:"",
                    // roles: ["ADMIN"]
                }
            ]
        }

    ]



};
