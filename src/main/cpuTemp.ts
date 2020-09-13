import {ipcMain } from 'electron'
import * as system from 'systeminformation'

class CPUData {
    Temp: number
    Frequencey: number

    async update()  {
        let data = await system.cpuTemperature()
        this.Temp = data.main
    }

    createListener() {
        ipcMain.on('CPUData', (event, arg) =>{
            this.update()
            event.reply('CPUData', this.Temp)
        })
    }
    
}