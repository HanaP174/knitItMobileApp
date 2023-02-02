import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Palette} from "../models/knitting-project.model";

@Injectable({
  providedIn: 'root'
})
export class GenerateColorsService {

  constructor(private httpService: HttpClient) {
  }

  generateColors(callback: (palette: number[][]) => void) {
    const data = {
      model: 'default',
      input : ['N','N','N','N','N']
    }
    const result = this.httpService.post<Palette>('https://colormind.io/api/', JSON.stringify(data));
    result.subscribe(palette => {
      return callback(palette.result);
    })
  }
}
