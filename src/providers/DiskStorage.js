const fs = require('fs')
const uploadConfig = require('../config/upload')
const path = require('path')

class DiskStorage {
    async saveFIle(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file.name),
            path.resolve(uploadConfig.UPLOAD_FOLDERP, file.name)
        )
        
        return file
    }

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.TMP_FOLDER, file)

        try{
            await fs.promises.stat(filePath)
        } catch {
            return 
        }

        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage
