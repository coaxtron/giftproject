import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


declare var dataLayer: any;
// declare var LocalFileSystem: any;
declare var FileTransfer: any;
declare global {
    interface Window {
        cordova: any;
        requestFileSystem: any;
    }
}

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor(

        private router: Router,
  ) { }


    /**
     * This will return an object by grouping the list objects by their passed key's value
     * Each fields returned by this method, will contain an array list having the same value
     * in given @param key.
     * @param list Set of objects
     * @param key A key available in all object of the set
     */
    groupBy(list: any[], key: string): any {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    toArray(object: any) {
        return Object.keys(object).map(function (key) {
            return { 'key': key, 'list': object[key], 'displayName': object[key][0].displayName };
        });
    }

    sort(array: any[], key: string) {
        array.sort((a, b) =>
            a[key].localeCompare(b[key])
        );
        return array;
    }





    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    /**
     * To accept numbers only
     * @param event
     */
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }


}

