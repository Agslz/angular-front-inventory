import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// const base_url = environment.base_url;
const base_url = "http://spring-boot-app-409500.rj.r.appspot.com/api/v1"

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**
   * Get all categories
   *
   */

  getCategories() {
    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint);
  }

  /**
   * Save Categories
   */
  saveCategorie(body: any) {
    const endpoint = `${base_url}/categories`;
    return this.http.post(endpoint, body);
  }

  /**
   * Update Categories
   */
  updateCategorie(body: any, id: any) {
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * Delete Categories
   */
  deleteCategorie(id: any) {
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.delete(endpoint);
  }

  /**
   * Get Category by ID
   */
  getCategorieById(id: any) {
    const endpoint = `${base_url}/categories/ ${id}`;
    return this.http.get(endpoint);
  }

  /**
   * Export categories to excel
   */
  exportCategories() {
    const endpoint = `${base_url}/categories/export/excel`;
    return this.http.get(endpoint,{
      responseType: 'blob'
    });
  }
}
