<?php
/* 
   Created originally on : 01-07-2014
   Modifications on : 12-09-2014
  
   Company     : SaaSify Ltd.
   Author      : Eamonn Killian
   Web         : www.eamonnkillian.com
   Contact     : eamonnkillian@gmail.com
   
   This program reveals your account details for the SoftLayer platform
   and is heavily/almost entirely based on the wonderful sample API PHP
   scripts of Github member and SoftLayer API guru "underscorephil". I'd
   also highly recommend checking out these addresses for some great
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

require_once dirname(__FILE__) . '/SoftLayer/SoapClient.class.php';
$apiUsername = '<your API user>';
$apiKey = '<your API key>';
$client = SoftLayer_SoapClient::getClient('SoftLayer_Account', null, $apiUsername, $apiKey);
try {
    $myOBJ = $client->getObject();
    echo "<h2>Account Details</h2>";
    echo "<table>";
    foreach ($myOBJ as $key => $value) {
        echo "<tr><th>".$key."</th><td>".$value."</td></tr>";
    }
    echo "</table>";
    echo "<br/>";
} catch (Exception $e) {
    die($e->getMessage());
}
