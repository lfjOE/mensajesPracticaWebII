import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent {
  carritoService = inject(CarritoService);

  quitar(id: number) {
    this.carritoService.quitar(id);
  }

  vaciar() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      this.carritoService.vaciar();
    }
  }

  procederCompra() {
    if (this.carritoService.productos().length === 0) return;

    alert(`Procesando compra por $${this.carritoService.total().toFixed(2)}`);
    // Aquí irías a la página de checkout o procesarías la compra
    this.carritoService.exportarXML(this.carritoService.productos().length - 1);
    this.carritoService.vaciar();
  }

  // Método para agregar un producto de ejemplo (solo para testing)
  agregarProductoEjemplo() {
    const productosEjemplo: Producto[] = [
      { id: 1, nombre: 'Laptop Gaming', precio: 1200, descripcion: 'Laptop para gaming con RTX 4060' },
    ];

    const productoRandom = productosEjemplo[Math.floor(Math.random() * productosEjemplo.length)];
    this.carritoService.agregar(productoRandom);
  }
}