---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Contacts/Person.yml
---
# Titanium.Contacts.Person

<TypeHeader/>

## Overview

A person object is created using <Titanium.Contacts.createPerson>.

The following two kinds of properties exist for this object:

* single value - contains either a `string` or `number` type value, an array of `string` type 
values, or `null` if unset.
* multi-value - contains a dictionary with typical keys of `home`, `work` and/or `other`. Each 
key contains either a `string` type value, an array of `string` type values, or a dictionary 
containing key/value pairs with `string` type values.

### Adding and Modifying Properties

Support for adding and modifying properties is currently supported on iOS and Android.

### Keys as Address Book UI Labels

Keys act as labels in the address book user interface.

Although there is limited support for custom, arbitrarily-named, keys when used with multi-value 
properties, there is no support them with single value properties.

On iOS, creating custom keys is not recommended, and will lead to undefined results.

If a label has been created by the user of the device and used with a multi-value property, it 
will exist as a key with the same name.

See examples in <Titanium.Contacts> for more information.

These APIs are unavailable on macOS if the app is built on a version of Xcode < 12.

<ApiDocs/>
