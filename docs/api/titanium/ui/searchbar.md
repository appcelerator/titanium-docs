# Titanium.UI.SearchBar

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| ------- | --- | ------- |
| ![Android](./searchbar_android.png) | ![iOS](./searchbar_ios.png) | ![Windows](./searchbar_windows.png) |

The `SearchBar` object is closely modeled on an iOS native search bar.
As such, not all features are supported on other platforms. For Android applications,
consider using a <Titanium.UI.Android.SearchView> object instead.

Search bars are most commonly used for filtering the rows in a [TableView](Titanium.UI.TableView).
You can add a search bar to a table view by setting the table view's [search](Titanium.UI.TableView.search) property.
A search bar can also be used without a table view.

You can also use a `SearchView` object as the <Titanium.UI.ListView.searchView>
property of a [ListView](Titanium.UI.ListView) object.

Use the <Titanium.UI.createSearchBar> method or Alloy **`<SearchBar>`** element to create a search bar.

### Android Platform Implementation Notes

On Android, there are several issues with the current implementation:

* The cancel button does not work. It does not clear the search bar text or
  close the onscreen keyboard.

* Calling the `blur` method on the search bar closes the onscreen keyboard,
  but the search bar retains its focused appearance.

* The search bar does not lose focus when the user clicks on a row in the search
  results.

* The `value` property cannot be specified in the `createSearchBar` method.

To use a search bar on Android, you may need to explicitly control the focus and
clearing of the search bar, depending on your desired behavior. For example, to clear
the search bar and dismiss the onscreen keyboard when the user selects a row, you
could add code like this to the `click` event handler on your table view:

``` js
myTableView.addEventListener('click', function(e) {
    if (Ti.Platform.name === 'android') {
        // Clear search bar
        mySearchBar.value ="";
        // hiding and showing the search bar forces it back to its non-focused appearance.
        mySearchBar.hide();
        mySearchBar.show();
    }
    // standard click event handling here
});
```

**Note**: Due to native limitations, the SearchBar's positional properties may not work properly
when nested within a TableView or ListView (properties such as left, right, width and so on).

## Examples

### Simple Search Bar

``` js
var search = Titanium.UI.createSearchBar({
  barColor:'#000',
  showCancel:true,
  height:43,
  top:0,
});
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <SearchBar id="search" barColor="#000" showCancel="true" height="43" top="0" />
</Alloy>
```

### Search Bar with TableView

``` js
var search = Ti.UI.createSearchBar({
    showCancel: true
});
var tableview = Ti.UI.createTableView({
    search: search
});
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <TableView id="tableview">
        <SearchBar id="search" showCancel="true" />
    </TableView>
</Alloy>
```

<ApiDocs/>
