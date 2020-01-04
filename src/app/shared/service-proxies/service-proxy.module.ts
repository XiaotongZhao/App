import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';
import { AppHttpInterceptor } from "./AppHttpInterceptor";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        HttpClientModule
      ],
    providers: [
        ApiServiceProxies.MenuServiceProxy
    ]
})
export class ServiceProxyModule { }
