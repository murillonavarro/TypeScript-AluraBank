namespace Views {

    export abstract class View<T> {

        protected _elemento: JQuery;
    
        constructor(seletor: string) {
            
            this._elemento = $(seletor);
    
        }
    
        update(model: T) {
    
            this._elemento.html(this.template(model));
        }
    
        template(model: T): string {
    
            throw new Error('Você deve implementar o método template');
        }
    }
}