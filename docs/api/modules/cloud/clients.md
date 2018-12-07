# Modules.Cloud.Clients

<ProxySummary/>

## Examples

### Geolocate a Client

This example locates a client and checks the response.

    Cloud.Clients.geolocate({
        ip_address: clientIPAddress
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'ip_address: ' + e.ip_address + '\n' +
                'latitude: ' + e.location.latitude + '\n' +
                'longitude: ' + e.location.longitude);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
