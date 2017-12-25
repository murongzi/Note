/**
 * 导出的顺序一定要先到处service，在导出component
 * https://stackoverflow.com/questions/37997824/angular-di-error-exception-cant-resolve-all-parameters
 * https://github.com/angular/angular-cli/issues/6997
 */

export * from './header/index.service';

export * from './container/index.component';
export * from './footer/index.component';
export * from './header/index.component';