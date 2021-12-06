import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private _httpclinet: HttpClient) { }
  getColorCode(color): Observable<any> {
    return this._httpclinet.get<any>('https://api.color.pizza/v1/names/' + color).pipe(
      map(r => r),
      //  catchError(this.handleError<EauctionModel>('GetAuctionGetp'))
    );
  }
}
