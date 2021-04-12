import {
  Compiler,
  ComponentFactory,
  Injectable,
  Injector,
  Type,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LazyLoadService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  // loadFeatureModal(): Promise<any> {
  //   return this.loadModule(() =>
  //     import('path/to/module').then((m) => m.FeatureModule)
  //   );
  // }
  private loadModule(
    importModule: any,
    component?: Type<any>
  ): Promise<ComponentFactory<any> | null> {
    return new Promise((resolve, reject) =>
      (importModule() as Promise<Type<any>>)
        .then((elementModule) => {
          return this.compiler.compileModuleAsync(elementModule);
        })
        .then((ngModuleFactory) => {
          const moduleRef = ngModuleFactory.create(this.injector);
          if (component) {
            const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(
              component
            );
            resolve(factory);
          } else {
            resolve(null);
          }
        })
    );
  }
}
