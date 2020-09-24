declare module 'appium-adb' {
	const DEFAULT_ADB_PORT: number
	function getAndroidBinaryPath(binaryName: string): string
	function getSdkRootFromEnv(): string
	interface AdbOptions {
		adbExecTimeout: number
		adbPort: number
		allowOfflineDevices: boolean
		appDeviceReadyTimeout: number
		binaries: object
		buildToolsVersion: string
		curDeviceId: string
		emulatorPort: number
		executable: { path: string; defaultArgs: string[] }
		instrumentProc: any
		jars: object
		keyAlias: string
		keyPassword: string
		keystorePassword: string
		keystorePath: string
		logcat: any
		remoteAppsCacheLimit: number
		sdkRoot: string
		suppressKillServer: boolean
		tmpDir: string
		udid: string
		useKeystore: boolean
	}
	class ADB {
		static createADB(opts?: Partial<AdbOptions>): Promise<ADB>
		adbExec(cmd: any, opts: any): Promise<any>
		adbExecEmu(cmd: any): Promise<void>
		androidCoverage(instrumentClass: any, waitPkg: any, waitActivity: any): Promise<any>
		availableIMEs(): Promise<any>
		back(): Promise<void>
		broadcast(intent: any): Promise<void>
		broadcastAirplaneMode(on: any): Promise<void>
		broadcastProcessEnd(intent: any, processName: any): Promise<void>
		bugreport(timeout: any): Promise<any>
		cacheApk(apkPath: any, options: any): Promise<any>
		changeUserPrivileges(isElevated: any): Promise<any>
		checkApkCert(appPath: any, pkg: any, opts: any): Promise<any>
		checkAvdExist(avdName: any): Promise<any>
		clear(pkg: any): Promise<any>
		clearTextField(length: any): Promise<void>
		compileManifest(manifest: any, manifestPackage: any, targetPackage: any): Promise<void>
		createSubProcess(args: any): Promise<any>
		defaultIME(): Promise<any>
		deleteHttpProxy(): Promise<void>
		disableIME(imeId: any): Promise<void>
		dumpWindows(): Promise<any>
		enableIME(imeId: any): Promise<void>
		enabledIMEs(): Promise<any>
		endAndroidCoverage(): Promise<void>
		ensureCurrentLocale(language: any, country: any, script: any): Promise<any>
		execBundletool(args: any, errorMsg: any): Promise<any>
		execEmuConsoleCommand(cmd: any, opts: any): Promise<any>
		executeApksigner(args: any): Promise<any>
		extractBaseApk(apks: any): Promise<any>
		extractLanguageApk(apks: any, language: any): Promise<any>
		extractStringsFromApk(appPath: any, language: any, out: any): Promise<any>
		fileExists(remotePath: any): Promise<any>
		fileSize(remotePath: any): Promise<any>
		fingerprint(fingerprintId: any): Promise<void>
		forceStop(pkg: any): Promise<any>
		forwardAbstractPort(systemPort: any, devicePort: any): Promise<void>
		forwardPort(systemPort: any, devicePort: any): Promise<void>
		getAdbPath(): Promise<any>
		getAdbServerPort(): Promise<any>
		getAdbWithCorrectAdbPath(): Promise<any>
		getApiLevel(): Promise<any>
		getApkInfo(appPath: any): Promise<any>
		getApplicationInstallState(appPath: any, pkg: any): Promise<any>
		getBinaryFromPath(binaryName: any): Promise<any>
		getBinaryFromSdkRoot(binaryName: any): Promise<any>
		getBinaryNameForOS(...args: any[]): Promise<any>
		getClipboard(): Promise<any>
		getConnectedDevices(): Promise<any>
		getConnectedEmulators(): Promise<any>
		getDeniedPermissions(pkg: any, cmdOutput: any): Promise<any>
		getDeviceCountry(): Promise<any>
		getDeviceLanguage(): Promise<any>
		getDeviceLocale(): Promise<any>
		getDeviceProductCountry(): Promise<any>
		getDeviceProductLanguage(): Promise<any>
		getDeviceProductLocale(): Promise<any>
		getDeviceProperty(property: any): Promise<any>
		getDeviceSpec(specLocation: any): Promise<any>
		getDeviceSysCountry(): Promise<any>
		getDeviceSysLanguage(): Promise<any>
		getDeviceSysLocale(): Promise<any>
		getDevicesWithRetry(timeoutMs: any): Promise<any>
		getEmuImageProperties(avdName: any): Promise<any>
		getEmuVersionInfo(): Promise<any>
		getEmulatorPort(): Promise<any>
		getFocusedPackageAndActivity(): Promise<any>
		getForwardList(): Promise<any>
		getGeoLocation(): Promise<any>
		getGrantedPermissions(pkg: any, cmdOutput: any): Promise<any>
		getKeystoreHash(): Promise<any>
		getLocationProviders(): Promise<any>
		getLogcatLogs(): Promise<any>
		getManufacturer(): Promise<any>
		getModel(): Promise<any>
		getNameByPid(pid: any): Promise<any>
		getNotifications(): Promise<any>
		getPIDsByName(name: any): Promise<any>
		getPackageInfo(pkg: any): Promise<any>
		getPlatformVersion(): Promise<any>
		getPortFromEmulatorString(emStr: any): Promise<any>
		getReqPermissions(pkg: any, cmdOutput: any): Promise<any>
		getReverseList(): Promise<any>
		getRunningAVD(avdName: any): Promise<any>
		getRunningAVDWithRetry(avdName: any, timeoutMs: any): Promise<any>
		getScreenDensity(): Promise<any>
		getScreenOrientation(): Promise<any>
		getScreenSize(): Promise<any>
		getSdkBinaryPath(binaryName: any): Promise<any>
		getSetting(namespace: any, setting: any): Promise<any>
		getSmsList(opts: any): Promise<any>
		getTimeZone(): Promise<any>
		getVersion(...args: any[]): Promise<any>
		goToHome(): Promise<void>
		grantAllPermissions(pkg: any, apk: any): Promise<void>
		grantPermission(pkg: any, permission: any): Promise<void>
		grantPermissions(pkg: any, permissions: any): Promise<void>
		gsmCall(phoneNumber: any, action: any): Promise<void>
		gsmSignal(strength: any): Promise<void>
		gsmVoice(state: any): Promise<void>
		hasInternetPermissionFromManifest(appPath: any): Promise<any>
		initAapt(): Promise<void>
		initAapt2(): Promise<void>
		initBundletool(): Promise<void>
		initZipAlign(): Promise<void>
		inputText(text: any): Promise<void>
		insertManifest(manifest: any, srcApk: any, dstApk: any): Promise<void>
		install(appPath: any, options: any): Promise<any>
		installApks(apks: any, options: any): Promise<void>
		installFromDevicePath(apkPathOnDevice: any, opts: any): Promise<void>
		installMitmCertificate(cert: any): Promise<void>
		installOrUpgrade(appPath: any, pkg: any, options: any): Promise<any>
		instrument(pkg: any, activity: any, instrumentWith: any): Promise<void>
		isAirplaneModeOn(): Promise<any>
		isAnimationOn(): Promise<any>
		isAppInstalled(pkg: any): Promise<any>
		isDataOn(): Promise<any>
		isDeviceConnected(): Promise<any>
		isEmulatorConnected(): Promise<any>
		isIncrementalInstallSupported(): Promise<any>
		isMitmCertificateInstalled(cert: any): Promise<any>
		isRoot(): Promise<any>
		isScreenLocked(): Promise<any>
		isSoftKeyboardPresent(): Promise<any>
		isStreamedInstallSupported(): Promise<any>
		isTestPackageOnlyError(output: any): Promise<any>
		isValidClass(classString: any): Promise<any>
		isWifiOn(): Promise<any>
		keyevent(keycode: any): Promise<void>
		killAllEmulators(): Promise<void>
		killEmulator(avdName: any, timeout: any): Promise<any>
		killPackage(pkg: any): Promise<any>
		killProcessByPID(pid: any): Promise<void>
		killProcessesByName(name: any): Promise<void>
		killServer(): Promise<void>
		launchAVD(avdName: any, opts: any): Promise<any>
		listFeatures(): Promise<any>
		listProcessStatus(): Promise<any>
		lock(): Promise<void>
		ls(remotePath: any, opts: any): Promise<any>
		mkdir(remotePath: any): Promise<any>
		networkSpeed(speed: any): Promise<void>
		packageAndLaunchActivityFromManifest(appPath: any): Promise<any>
		performEditorAction(action: any): Promise<void>
		ping(): Promise<any>
		powerAC(state: any): Promise<void>
		powerCapacity(percent: any): Promise<void>
		powerOFF(): Promise<void>
		processExists(processName: any): Promise<any>
		pull(remotePath: any, localPath: any): Promise<void>
		pullApk(pkg: any, tmpDir: any): Promise<any>
		push(localPath: any, remotePath: any, opts: any): Promise<void>
		reboot(retries: any): Promise<void>
		reconnect(target: any): Promise<void>
		removeLogcatListener(listener: any): Promise<void>
		removePortForward(systemPort: any): Promise<void>
		removePortReverse(devicePort: any): Promise<void>
		requireRunningSettingsApp(opts: any): Promise<any>
		resetTelnetAuthToken(...args: any[]): Promise<any>
		restart(): Promise<void>
		restartAdb(): Promise<void>
		reversePort(devicePort: any, systemPort: any): Promise<void>
		revokePermission(pkg: any, permission: any): Promise<void>
		rimraf(path: any): Promise<void>
		root(): Promise<any>
		rotate(): Promise<void>
		runInImeContext(ime: any, fn: any): Promise<any>
		screenrecord(destination: any, options: any): Promise<any>
		sendSMS(phoneNumber: any, message: any): Promise<void>
		sendTelnetCommand(command: any): Promise<any>
		sensorSet(sensor: any, value: any): Promise<void>
		setAirplaneMode(on: any): Promise<void>
		setAnimationState(on: any): Promise<void>
		setDataState(on: any, isEmulator: any): Promise<void>
		setDefaultHiddenApiPolicy(ignoreError: any): Promise<void>
		setDevice(deviceObj: any): Promise<void>
		setDeviceId(deviceId: any): Promise<void>
		setDeviceLanguageCountry(language: any, country: any, script: any): Promise<void>
		setDeviceLocale(locale: any): Promise<void>
		setDeviceProperty(prop: any, val: any, opts: any): Promise<void>
		setDeviceSysLocaleViaSettingApp(language: any, country: any, script: any): Promise<void>
		setEmulatorPort(emPort: any): Promise<void>
		setGeoLocation(location: any, isEmulator: any): Promise<any>
		setHiddenApiPolicy(value: any, ignoreError: any): Promise<void>
		setHttpProxy(proxyHost: any, proxyPort: any): Promise<void>
		setIME(imeId: any): Promise<void>
		setLogcatListener(listener: any): Promise<void>
		setSetting(namespace: any, setting: any, value: any): Promise<any>
		setWifiAndData({ wifi, data }: any, isEmulator: any): Promise<void>
		setWifiState(on: any, isEmulator: any): Promise<void>
		shell(cmd: any, opts: any): Promise<any>
		sign(appPath: any): Promise<void>
		signWithCustomCert(apk: any): Promise<void>
		signWithDefaultCert(apk: any): Promise<void>
		startApp(startAppOptions: any): Promise<any>
		startLogcat(opts: any): Promise<void>
		startUri(uri: any, pkg: any, opts: any): Promise<void>
		stopAndClear(pkg: any): Promise<void>
		stopLogcat(): Promise<void>
		targetSdkVersionFromManifest(appPath: any): Promise<any>
		targetSdkVersionUsingPKG(pkg: any, cmdOutput: any): Promise<any>
		toggleGPSLocationProvider(enabled: any): Promise<void>
		typeUnicode(text: any): Promise<any>
		uninstallApk(pkg: any, options: any): Promise<any>
		unroot(): Promise<any>
		verifyEmulatorConnected(): Promise<void>
		waitForActivity(pkg: any, act: any, waitMs: any): Promise<void>
		waitForActivityOrNot(pkg: any, activity: any, waitForStop: any, waitMs: any): Promise<any>
		waitForDevice(appDeviceReadyTimeout: any): Promise<void>
		waitForEmulatorReady(timeoutMs: any): Promise<any>
		waitForNotActivity(pkg: any, act: any, waitMs: any): Promise<void>
		zipAlignApk(apk: any): Promise<any>
	}
}
