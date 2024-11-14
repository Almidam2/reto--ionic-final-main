import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
//import { Filesystem, Directory } from '@capacitor/filesystem';
//import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor(private router:Router,
   
  ) { }
  usuarioo = JSON.parse(localStorage.getItem('usuario') || '{}');
  public async addNewToGallery() {
    // Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Obtener el blob de la foto capturada
    const response = await fetch(capturedPhoto.webPath!);
    const blob = await response.blob();

    // Crear un objeto FormData para enviar a la API
    const formData = new FormData();
    const fileName = `${Date.now()}.${capturedPhoto.format}`; // Personaliza el nombre del archivo
    formData.append('file', blob, fileName); // 'file' es el nombre del campo que la API espera
    console.log(fileName);
    
    
   
    const userIdNumber = this.usuarioo.id;
    console.log(userIdNumber);
    
    formData.append('usuario_id', this.convertToString(userIdNumber)); // Agrega el ID del usuario

    try {
      const apiResponse = await fetch('https://albertox3.duckdns.org/ws/user/upload', {
        method: 'POST',
        body: formData,
      });

      if (apiResponse.ok) {
        const result = await apiResponse.json();
        console.log('Respuesta del servidor:', result);

        // Guardar la referencia de la imagen
        this.photos.unshift({
          filepath: fileName,
          webviewPath: capturedPhoto.webPath!
        });
       
        window.location.reload();
      } else {
        console.error('Error en la solicitud a la API:', apiResponse.status);
      }
    } catch (error) {
      console.error('Error al enviar la imagen a la API:', error);
    }
  }
  public convertToString(value: string | null): string {
    return value !== null ? value : ''; // Retorna una cadena vacía si es null
}
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
