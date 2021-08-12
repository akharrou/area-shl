---
status: INCOMPLETE
title: "system_profiler"
tags: [get,print,display,report,system,hardware,software,configuration,information]
---

# `system_profiler`

## INSTALLATION


```bash
#ℹ︎ installation
❯ *comes pre-installed*
```


## USECASES

----
#### To get/print a report of system hardware, and/or software, configuration information:


```bash
#ℹ︎ report specified system hardware, and software configuration information; else all modules, i.e full comprehensive report
❯ system_profiler [-xml|-json] <module>
```


A graphical user interface version is available under:

    Menu Bar ➤ Apple (icon) ➤ About This Mac ➤ System Report

----
#### To get/print a list of available system hardware and software information modules:


```bash
#ℹ︎ list available system hardware, and software configuration information modules
❯ system_profiler -listdatatypes
```



## NOTES

Available Datatypes (modules of system hardware and software configuration information):

             SPParallelATADataType : TODO
         SPUniversalAccessDataType : TODO
           SPSecureElementDataType : TODO
            SPApplicationsDataType : TODO
                   SPAudioDataType : audio devices information
               SPBluetoothDataType : TODO
                  SPCameraDataType : TODO
              SPCardReaderDataType : TODO
                 SPiBridgeDataType : TODO
          SPDeveloperToolsDataType : TODO
             SPDiagnosticsDataType : TODO
        SPDisabledSoftwareDataType : TODO
             SPDiscBurningDataType : TODO
                SPEthernetDataType : TODO
              SPExtensionsDataType : TODO
            SPFibreChannelDataType : TODO
                SPFireWireDataType : TODO
                SPFirewallDataType : TODO
                   SPFontsDataType : TODO
              SPFrameworksDataType : TODO
                SPDisplaysDataType : system hardware display chips
                SPHardwareDataType : TODO
          SPInstallHistoryDataType : TODO
           SPInternationalDataType : TODO
          SPLegacySoftwareDataType : TODO
         SPNetworkLocationDataType : TODO
                    SPLogsDataType : TODO
           SPManagedClientDataType : TODO
                  SPMemoryDataType : TODO
                    SPNVMeDataType : TODO
                 SPNetworkDataType : TODO
                     SPPCIDataType : TODO
            SPParallelSCSIDataType : TODO
                   SPPowerDataType : TODO
                SPPrefPaneDataType : TODO
        SPPrintersSoftwareDataType : TODO
                SPPrintersDataType : TODO
    SPConfigurationProfileDataType : TODO
               SPRawCameraDataType : TODO
                     SPSASDataType : TODO
               SPSerialATADataType : TODO
                     SPSPIDataType : TODO
              SPSmartCardsDataType : TODO
                SPSoftwareDataType : operating system, and kernel, software information
             SPStartupItemDataType : TODO
                 SPStorageDataType : system data storage devices
            SPSyncServicesDataType : TODO
             SPThunderboltDataType : TODO
                     SPUSBDataType : TODO
           SPNetworkVolumeDataType : TODO
                    SPWWANDataType : TODO
                 SPAirPortDataType : TODO

## SEE

    system_profiler(8)
    Menu Bar ➤ Apple (icon) ➤ About This Mac ➤ System Report

## SEEALSO

    sysctl(8), mdls(1), security(1), systemstats(8), sw_vers(1)

