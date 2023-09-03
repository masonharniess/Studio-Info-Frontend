import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IStudio } from "../interfaces/studio";

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  private studiosUrl = 'https://localhost:7225/api/studios'

  constructor(private http: HttpClient) {}

  getStudios(): Observable<IStudio[]> {
    return this.http.get<IStudio[]>(this.studiosUrl)
  }
}