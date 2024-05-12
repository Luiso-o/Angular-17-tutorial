import { Injectable } from '@angular/core';
import { operatingsSistems } from '../interfaces/operating-system';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {

  operativeSystemService: operatingsSistems[] = [{ 'id': 1, 'name': 'Windows 10' }, { 'id': 2, 'name': 'macOS Monterey' }, {
    'id': 3, 'name': 'Ubuntu 20.04 LTS'
  }, { 'id': 4, 'name': 'Fedora 35' }, { 'id': 5, 'name': 'Android 12' }, {
    'id': 6, 'name': 'iOS 15'
  }, { 'id': 7, 'name': 'Red Hat Enterprise Linux 8' }, { 'id': 8, 'name': 'Debian 11' }, {
    'id': 9, 'name': 'Windows 11'
  }, { 'id': 10, 'name': 'macOS Ventura' }];

  constructor() { }

  getOperatingSystems(): operatingsSistems[]{
    return this.operativeSystemService;
  }
}
