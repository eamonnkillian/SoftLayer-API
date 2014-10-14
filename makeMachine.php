<?php
/* 
   Created originally on : 01-07-2014
   Modifications on : 12-09-2014
  
   Company     : SaaSify Ltd.
   Author      : Eamonn Killian
   Web         : www.eamonnkillian.com
   Contact     : eamonnkillian@gmail.com
   
   This program provides an example of creating a new virtual machine on
   the SoftLayer platform. It uses object masks and begins to push towards
   intermediate level use of SoftLayer but is included in this early
   "Getting Started with SoftLayer" series as the most advanced example of
   building an API. As with the other scripts it leverages the work of
   "underscorephil".
   I'd also highly recommend checking out these addresses for some great
   reference/learning materials/scripts:

        www.github.com/softlayer
        www.github.com/SL-AshleyW/API-PHP-Scripts
        www.github.com/shift31/hostbase-importer-softlayer
        www.github.com/ycs334/softlayer-api-portal
        www.github.com/yendor/softlayer
        www.github.com/lboaretto/Stratos
        www.github.com/tenthirtyone1031/coinzen
        www.github.com/tylerflint/sandbox

        ... and many more!
*/

require_once('softlayer/SoapClient.class.php');
$apiUsername = '<your API user>';
$apiKey = '<your API key>';
$client = Softlayer_SoapClient::getClient('SoftLayer_Virtual_Guest', null, $apiUsername, $apiKey);
try {
    $templateObject = new stdClass();
    $templateObject->hostname = 'ejk-test-server';
    $templateObject->domain = 'softlayer.com';
    $templateObject->startCpus = 1;
    $templateObject->maxMemory = 1024;
    $templateObject->hourlyBillingFlag = true;
//
// Use this line to identify an OS
//
    $templateObject->operatingSystemReferenceCode = 'CENTOS_6_64';
//
// Use this line to load from an image if you want to use an image ...
//
// $templateObject->blockDeviceTemplateGroup->globalIdentifier = '5a94b6f2-26b4-46a3-b743-fc29dd6e8dab';
    
    $templateObject->datacenter->name = 'ams01';
    $templateObject->localDiskFlag = false;
 
    $result = $client->createObject($templateObject);
    echo "<h2>New Virtual Machine Details</h2>";
    echo "<table>";
    foreach ($result as $databit) {
        foreach ($databit as $key => $value) {
            echo "<tr><th>".$key."</th><td>".$value."</td></tr>";
        }
    }
    echo "</table>";
    echo "<br/>";
} catch ( Exception $e) {
    die( $e->getMessage());
}
