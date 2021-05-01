const  kipasModel = require('../model/kipas')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    kipasModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil menginput penjualan kipas'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menginput penjualan kipas'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    kipasModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan semua data penjualan kipas',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan semua data penjualan kipas',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    kipasModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan semua id penjualan kipas',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan semua id penjualan kipas',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    kipasModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data penjualan kipas'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data penjualan kipas'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    kipasModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data penjualan kipas'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data penjualan kipas'
    }))
})
