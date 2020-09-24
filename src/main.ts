import * as appiumAdb from 'appium-adb'
import * as getStdin from 'get-stdin'
import * as mri from 'mri'

process.nextTick(async () => {
	let argv = mri(process.argv.slice(2))
	let adb = await appiumAdb.ADB.createADB()
	console.log('adb ->', adb)
})
