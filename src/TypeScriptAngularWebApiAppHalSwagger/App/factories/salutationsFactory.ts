﻿/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />

"use strict";

module app.angular.Factories {
    export class SalutationsFactory {
        private _baseUrl: string = "/home";

        constructor(private $http: ng.IHttpService) {
        }

        getResponse(): ng.IHttpPromise<angular.Models.RegistrationModel> {
            return this.$http.get<angular.Models.RegistrationModel>(this._baseUrl);
        }
    }
}

angular.module("app")
    .factory("salutationsFactory", [
        "$http",
        ($http) => new app.angular.Factories.SalutationsFactory($http)
    ]);
