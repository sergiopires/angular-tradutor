import { Component } from '@angular/core'
 

@Component({
    selector: 'app-topo',
    //quando precisars usar uma view em arquivo externo
    templateUrl: './topo.component.html',
    //quando precisar usar uma view inline
    //template:  '<p>Este é o componente topo</p>'
    // arquivos de estilo na mesma linha
    //styles:[ '.exemplo { color: red}']
    styleUrls: ['./topo.component.css']    

}) 
 
export class TopoComponent {
    public titulo: string = 'String interpolation'
}
