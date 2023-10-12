import request from './request'


// ************* Đăng Nhập **********
export const login = ({userName,password}) =>{
    return request.post('', {userName, password})
}

// ************* Đăng ký **********
export const register = ({}) =>{
    return request.post('', {})
}

// *************** User **********
 
// API create User
export const createUser = (values) =>{
    return request.post('/user', values)
}

//  get all User 
export const getListUser = ()=>{
    return request.get('/user/all')
} 

//  get detail User 
export const getInforUser = (userId)=>{
    return request.get(`/user/${userId}`)
}

// Update infor User 
export const updateUser = (id,values) =>{
}

// Delete each User 
export const deleteUser = (userId) =>{
    return request.delete(`/user/${userId}`)
}

//  Delete All User 
export const delAllUser = (ids) =>{
    return request.delete('/user/delete/all', {data: ids})
}

// Filter infor User
export const filterUser = (values) =>{
    // console.log('values', values);
    const userValues = {
        start: 0,
        limit: 3,
        username: values?.username,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
        dobFrom: values?.dobFrom,
        dobTo: values?.dobTo,
        name: values?.name,
        phone: values?.phone,
        email: values?.email,
        address: values?.address,
    }
    console.log('userValues', userValues);
    return request.post('/user/filter', userValues)
}
export const filterStaff = (values) =>{
    const userValues = {
        start: 0,
        limit: 3,
        username: values?.username,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
        dobFrom: values?.dobFrom,
        dobTo: values?.dobTo,
        name: values?.name,
        phone: values?.phone,
        email: values?.email,
        address: values?.address,
        roleId: "STAFF"
        
    }
    console.log(userValues);
    return request.post('/user/filter', userValues)
}

export const filterCustomer = (values) =>{
    const userValues = {
        start: 0,
        limit: 3,
        username: values?.username,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
        dobFrom: values?.dobFrom,
        dobTo: values?.dobTo,
        name: values?.name,
        phone: values?.phone,
        email: values?.email,
        address: values?.address,
        roleId: "CUSTOMER"
        
    }
    console.log(userValues);
    return request.post('/user/filter', userValues)
}


// *********** Role ********
// getAll
export const getAllRole = () =>{
    return request.get('/roles/all')
}

// *********** Service *******

// API create Service
export const createService = (values) =>{
    return request.post('/service', values)
}

//  get all Service 
export const getListService = ()=>{
    return request.get('/service/all')
} 

//  get detail Service 
export const getInforService = (id)=>{
    return request.get(`/service/${id}`)
}

// Update infor Service 
export const updateService = (id, values) =>{
    return request.put(`/service/${id}`, values)
}

// Delete each Service 
export const deleteService  = (id) =>{
    return request.delete(`/service/${id}`)
}

//  Delete All Service 
export const delAllService  = (ids) =>{
    return request.delete('/service/delete/all', {data: ids})
}

// Filter infor Service
export const filterService= (values) =>{
    const ServiceValue = {
        "start":0,
        "limit":5,
        name: values?.name,
        typeOfService: values?.typeOfService,
        learnOnlineOrOffline: values?.learnOnlineOrOffline,
        coursePrice: values?.coursePrice,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
    }
    return request.post('/service/filter', ServiceValue)
}
export const filterRL= (values) =>{
    const ServiceValue = {
        "start":0,
        "limit":5,
        name: values?.name,
        typeOfService: "REVIEW_LESSON",
        learnOnlineOrOffline: values?.learnOnlineOrOffline,
        coursePrice: values?.coursePrice,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
    }
    return request.post('/service/filter', ServiceValue)
}

// *********** News *******

// API create News
export const createNews = (values) =>{
    return request.post('/news', values)
}

//  get all News
export const getListNews = ()=>{
    return request.get('/news/all')
} 

//  get detail News
export const getInforNews = (id)=>{
    return request.get(`/news/${id}`)
}

// Update infor News
export const updateNews = (id, values) =>{
    return request.put(`/news/${id}`, values)
}

// Delete each News
export const deleteNews = (id) =>{
    return request.delete(`/news/${id}`)
}

//  Delete All News
export const delAllNews = (ids) =>{
    return request.delete('/news/delete/all', {data: ids})
}

// Filter infor News
export const filterNews= (values) =>{
    const newsValue = {
        "start":0,
        "limit":5,
        name: values?.name,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
    }
    return request.post('/news/filter', newsValue)
}
// *********** Document *******

// API create Document
export const createDocument = (values) =>{
    return request.post('/document', values)
}

//  get all Document
export const getListDocument = ()=>{
    return request.get('/document/all')
} 

//  get detail Document
export const getInforDocument = (id)=>{
    return request.get(`/document/${id}`)
}

// Update infor Document
export const updateDocument = (id, values) =>{
    return request.put(`/document/${id}`, values)
}

// Delete each Document
export const deleteDocument = (id) =>{
    return request.delete(`/document/${id}`)
}

//  Delete All Document
export const delAllDocument = (ids) =>{
    return request.delete('/document/delete/all1', {data: ids})
}

// Filter infor Document
export const filterDocument = (values) =>{
    const docValue = {
        "start":0,
        "limit":5,
        name: values?.name,
        dateFrom: values?.dateFrom,
        dateTo: values?.dateTo,
        status: values?.status,
    }
    return request.post('/document/filter', docValue)
}

// ********** ExamSchedule **********

// API create ES
export const createES = (values) =>{
    return request.post('/exam/schedule', values)
}

//  get all ES
export const getListES = ()=>{
    return request.get('/exam/schedule/all')
} 

//  get detail ES
export const getInforES = (id)=>{
    return request.get(`/exam/schedule/${id}`)
}

// Update infor ES
export const updateES = (id, values) =>{
    return request.put(`/exam/schedule/${id}`, values)
}

// Delete each ES
export const deleteES = (id) =>{
    return request.delete(`/exam/schedule/${id}`)
}

//  Delete All ES
export const delAllES = (ids) =>{
    return request.delete('/exam/schedule/delete/all', {data: ids})
}

// Filter infor ES
export const filterES = (values) =>{
    const docValue = {
        "start":0,
        "limit":5,
        docName: values?.docName,
    }
    return request.post('/exam/schedule/filter', docValue)
}

// ****************** UploadFile ******
export const uploadFile = (file) =>{
    console.log("data res: ",file)
    const formData = new FormData()
    formData.append("file", file)
    return request.post('/file/upload', formData)
}

// *****************DislayManager*******

// API create Display
export const createDisplay = (values) =>{
    return request.post('/display', values)
}

//  get all ES
export const getListDisplay = ()=>{
    return request.get('/display/all')
} 

//  get detail ES
export const getInforDisplay = (id)=>{
    return request.get(`/display/${id}`)
}

// Update infor ES
export const updateDisplay = (id, values) =>{
    return request.put(`/display/${id}`, values)
}

// Delete each ES
export const deleteDisplay = (id) =>{
    return request.delete(`/display/${id}`)
}

//  Delete All ES
export const delAllDisplay = (ids) =>{
    return request.delete('/display/delete/all', {data: ids})
}

// Filter infor ES
export const filterDisplay = (values) =>{
    const docValue = {
        "start":0,
        "limit":5,
        docName: values?.docName,
    }
    return request.post('/display/filter', docValue)
}

//  get all ES
export const getListSlide = ()=>{
    return request.get('/slide/all')
} 

// Update infor ES
export const updateSlide = (id, values) =>{
    return request.put(`/slide/${id}`, values)
}