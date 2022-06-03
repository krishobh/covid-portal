import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public isLoading: Subject<boolean> = new Subject<boolean>();
  public isLoadingMessage = this.isLoading.asObservable();

  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  /*
   * @link {HttpRequestInterceptor}
   * @param isLoading {boolean}
   * @param url {string}
   */
  setLoading(loading: boolean, url: string): void {
    if (loading) {
        this.loadingMap.set(url, loading);
        this.isLoading.next(true);
    }
    else if (!loading && this.loadingMap.has(url)) {
        this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
        this.isLoading.next(false);
    }
  }
}
