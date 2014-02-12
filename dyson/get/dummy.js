module.exports = {
    path : '/config/user/:id?',
    template : {
        success : true,
        result : {
            id : function(params) {
                return params.id || 1;
            },
            name : 'Lars',

            "username" : "exp_demo",
            "userId" : "1",
            "email" : "ignacio.calvo2@mapflow.com",
            "clientId" : "DEMO",
            "roleName" : "admin-tsi",
            "roleDescription" : "Administrator with global TSI",
            "locale" : "en",
            "roles" : [ {
                "name" : "admin",
                "description" : "Administrator"
            }, {
                "name" : "admin-peril-panel",
                "description" : "Administrator Peril Summary"
            }, {
                "name" : "admin-tsi",
                "description" : "Administrator with global TSI"
            }, {
                "name" : "underwriting",
                "description" : "Underwriting"
            }, {
                "name" : "adminv2",
                "description" : "Administrator V2"
            }, {
                "name" : "manager",
                "description" : "Manager"
            } ],
            "legendMaps" : null,
            "locales" : [ "en" ],
            "feedbackCategories" : [ {
                "name" : "feedback.category.error",
                "value" : "ERROR"
            }, {
                "name" : "feedback.category.suggestion",
                "value" : "SUGGESTION"
            }, {
                "name" : "feedback.category.feedback",
                "value" : "FEEDBACK"
            } ],
            "dateFormat" : null,
            "dateDisplay" : "d/m/Y G:i a",
            "currency" : "GBP",
            "minClusterDetailSize" : null,
            "globalClusterZoomOffset" : 2,
            "unitsDescription" : {
                "f" : 0.3048,
                "m" : 1,
                "miles" : 1609.344,
                "y" : 0.9144,
                "km" : 1000
            },
            "user" : {
                "id" : 1,
                "username" : "exp_demo",
                "forename" : "Mapflow",
                "surname" : "User",
                "locale" : "en",
                "clientId" : "DEMO",
                "dataId" : 2,
                "userRoleId" : 0,
                "lastLoginDate" : 1388058677376,
                "secondToLastLoginDate" : 1388016879044,
                "createdDate" : 1282566420000,
                "roleName" : "admin-tsi",
                "emailAddress" : "ignacio.calvo2@mapflow.com",
                "branchName" : null,
                "deletedDate" : null,
                "broker" : null,
                "agent" : null,
                "deleted" : false,
                "disable" : false,
                "displayName" : "Mapflow User"
            },
            "mapserverUrl" : "uat.mapflow.com/geomapserver/",
            "tilecacheUrl" : "uat.mapflow.com/geotilecache/",
            "sessionTimeout" : "30",
            "heartBeatTimeout" : "2",
            "uploadStatusPollingFrequency" : "10",
            "defaultBooksString" : "",
            "books" : [ {
                "selected" : false,
                "name" : "all",
                "id" : "all",
                "text" : "On cover",
                "geosearchEncoding" : null,
                "bookFilters" : null,
                "bookDetails" : {
                    "icon" : "feature-purple",
                    "id" : "all-policies"
                },
                "gridView" : true
            } ],
            "filteredIcons" : null,
            "layers" : [
                    {
                        "name" : "google-streets-chilled",
                        "text" : "Streets",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "CHILLED",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : 19
                    },
                    {
                        "name" : "google-streets",
                        "text" : "Streets (Classic)",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "ROADMAP",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "google-simplified",
                        "text" : "Simplified",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "SIMPLIFIED",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "google-terrain",
                        "text" : "Terrain",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "TERRAIN",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : 14
                    },
                    {
                        "name" : "google-satellite",
                        "text" : "Satellite",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "SATELLITE",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : 18
                    },
                    {
                        "name" : "google-hybrid",
                        "text" : "Hybrid",
                        "provider" : "google",
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "HYBRID",
                        "id" : null,
                        "layerType" : "BASE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : 18
                    },
                    {
                        "name" : "world-flood",
                        "text" : "World Flood",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "dartmouth_flood_exposure",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "1050",
                                "color" : "#ebebeb",
                                "borderColor" : "#000",
                                "description" : "Very Low",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "500",
                                "color" : "#a2e6ff",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "250",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "100",
                                "color" : "#0088bb",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "50",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "world-eq",
                        "text" : "World Earthquake",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "world_earthquake_exposure",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "world",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "california-eq",
                        "text" : "California Zones",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "california_earthquake_exposure",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "1",
                                "color" : "#CCCCCC",
                                "borderColor" : "#000",
                                "description" : "San Francisco",
                                "fontColor" : "#fff",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#999999",
                                "borderColor" : "#000",
                                "description" : "Sierra",
                                "fontColor" : "#fff",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#666666",
                                "borderColor" : "#000",
                                "description" : "San Diego",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#333333",
                                "borderColor" : "#000",
                                "description" : "Los Angeles",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "california-eq-google",
                        "text" : "California Earthquake",
                        "provider" : "WMS",
                        "info" : null,
                        "layerName" : "03447452725579868080-06147283943716514490-4",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "1",
                                "color" : "#F7FBFF",
                                "borderColor" : "#000",
                                "description" : "Very Low",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#BBF6FC",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#4CC0FF",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#0073B2",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "black",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "5",
                                "color" : "#00527F",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : "https://earthbuilder.google.com/03447452725579868080-12579308176730290872-4/wms/",
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "sturmflut",
                        "text" : "Sturmflut",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "stormflut_srtm_exposure",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "2",
                                "color" : "#cbe9f4",
                                "borderColor" : "#000",
                                "description" : "High",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "5",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "aus-flood",
                        "text" : "Australia Flood",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "australia_flood",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "500",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "250",
                                "color" : "#0088bb",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "100",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "50",
                                "color" : "#a2e6ff",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "cresta",
                        "text" : "Cresta",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "cresta_ora_exposure",
                        "opacity" : "0.5",
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "canada-trca",
                        "text" : "Toronto Flood",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "canada_trca_flood",
                        "opacity" : "0.5",
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "jba-fluvial-canada",
                        "text" : "JBA Fluvial Canada",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "jba_fluvial_canada",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#ebebeb",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "black",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1500",
                                "color" : "#99DBFF",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "1500",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "200",
                                "color" : "#4CC0FF",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "200",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "100",
                                "color" : "#0073B2",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "100",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "20",
                                "color" : "#00527F",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "20",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "ab-fluvial-canada",
                        "text" : "Alberta Fluvial",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "ab_canada",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#ebebeb",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "black",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#99DBFF",
                                "borderColor" : "#000",
                                "description" : "Overland Flow",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#4CC0FF",
                                "borderColor" : "#000",
                                "description" : "Under Review",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#0073B2",
                                "borderColor" : "#000",
                                "description" : "Flood Fringe",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#FFFFE0",
                                "borderColor" : "#000",
                                "description" : "Flood Way",
                                "fontColor" : "black",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "jba-fluvial-demo",
                        "text" : "River",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "jba_fluvial_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "jba-fluvial",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "jba-tidal-demo",
                        "text" : "Coastal",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "jba_coastal_uk_ora",
                        "opacity" : "0.5",
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "jba-ground-demo",
                        "text" : "Groundwater",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "jba_groundwater_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "jba",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "jba-swater-demo",
                        "text" : "Surface Water",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "jba_surface_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "jba",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "us-fema",
                        "text" : "US Fema Flood",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "us_fema_exposure",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#EBEBEB",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "black",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "None"
                            }, {
                                "value" : "1",
                                "color" : "#c4e6f8",
                                "borderColor" : "#000",
                                "description" : "D",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "D"
                            }, {
                                "value" : "2",
                                "color" : "#7ccade",
                                "borderColor" : "#000",
                                "description" : "VE",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "VE"
                            }, {
                                "value" : "3",
                                "color" : "#3983a4",
                                "borderColor" : "#000",
                                "description" : "IN / UNDES",
                                "fontColor" : "black",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "IN;UNDES"
                            }, {
                                "value" : "4",
                                "color" : "#0055a7",
                                "borderColor" : "#000",
                                "description" : "X / X500",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "X;X500"
                            }, {
                                "value" : "5",
                                "color" : "#27103a",
                                "borderColor" : "#000",
                                "description" : "A / AE / AH / AO",
                                "fontColor" : "#fff",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : "A;AE;AH;AO"
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "us-hurricane",
                        "text" : "US Hurricane",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "us_hurricane",
                        "opacity" : "0.5",
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-landslide",
                        "text" : "Landslide",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_landslide_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-dissolution",
                        "text" : "Dissolution",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_dissolution_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-shrinkswell",
                        "text" : "Shrinkswell",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_shrinkswell_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-runningsands",
                        "text" : "Running Sands",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_runningsands_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-compressible",
                        "text" : "Compressible",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_compress_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bgs-collapsible",
                        "text" : "Collapsible",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "exp_geo12_bgs_collapse_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : null,
                            "templateName" : "default_bgs",
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 13,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bundaberg-flood",
                        "text" : "Bundaberg Flood",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "amb_bundaberg_flood",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#FFF",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "#fff",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1000",
                                "color" : "#CBE9F4",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "#000",
                                "valueDesc" : "1000",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "100",
                                "color" : "#A2E6FF",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "#000",
                                "valueDesc" : "100",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "50",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "50",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "20",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "#fff",
                                "valueDesc" : "20",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bundaberg-2-fluvial",
                        "text" : "Bundaberg 2 fluvial",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "amb_bundaberg_2_fluvial",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#FFF",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "#fff",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#cbe9f4",
                                "borderColor" : "#000",
                                "description" : "0-0.2 m No damage",
                                "fontColor" : "#000",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#99dbff",
                                "borderColor" : "#000",
                                "description" : "0.2 - 1.0 m low flood",
                                "fontColor" : "#000",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "1.0 - 3.5 m medium flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#0073b2",
                                "borderColor" : "#000",
                                "description" : "3.5m + high flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "bundaberg-2-pluvial",
                        "text" : "Bundaberg 2 pluvial",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "amb_bundaberg_2_pluvial",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#FFF",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "#fff",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#cbe9f4",
                                "borderColor" : "#000",
                                "description" : "0-0.2 m No damage",
                                "fontColor" : "#000",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#99dbff",
                                "borderColor" : "#000",
                                "description" : "0.2 - 1.0 m low flood",
                                "fontColor" : "#000",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "1.0 - 3.5 m medium flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#0073b2",
                                "borderColor" : "#000",
                                "description" : "3.5m + high flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "aus-fluv",
                        "text" : "Bundaberg 1 Raster",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "amb_aus_fluv",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "0",
                                "color" : "#FFF",
                                "borderColor" : "#000",
                                "description" : "None",
                                "fontColor" : "#fff",
                                "valueDesc" : "0",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#CBE9F4",
                                "borderColor" : "#000",
                                "description" : "0-0.2 m No damage",
                                "fontColor" : "#000",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#A2E6FF",
                                "borderColor" : "#000",
                                "description" : "0.2 - 1.0 m low flood",
                                "fontColor" : "#000",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "1.0 - 3.5 m medium flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#0073b2",
                                "borderColor" : "#000",
                                "description" : "3.5m + high flood",
                                "fontColor" : "#fff",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "pbbi_crime_uk_ora",
                        "text" : "PBBI UK theft",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "pbbi_crime_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "ND",
                                "color" : "#cfcfcf",
                                "borderColor" : "#000",
                                "description" : "No Data",
                                "fontColor" : "#000",
                                "valueDesc" : "ND",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#000000",
                                "borderColor" : "#000",
                                "description" : "Very Low Potential",
                                "fontColor" : "#FFF",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#0000FF",
                                "borderColor" : "#000",
                                "description" : "Low Potential",
                                "fontColor" : "#FFF",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#00FF00",
                                "borderColor" : "#000",
                                "description" : "Moderate Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#FF9900",
                                "borderColor" : "#000",
                                "description" : "Significant Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "5",
                                "color" : "#FF0000",
                                "borderColor" : "#000",
                                "description" : "Very Significant Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "pbbi_arson_uk_ora",
                        "text" : "PBBI UK Arson",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "pbbi_arson_uk_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "ND",
                                "color" : "#cfcfcf",
                                "borderColor" : "#000",
                                "description" : "No Data",
                                "fontColor" : "#000",
                                "valueDesc" : "ND",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "1",
                                "color" : "#000000",
                                "borderColor" : "#000",
                                "description" : "Very Low Potential",
                                "fontColor" : "#FFF",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "2",
                                "color" : "#0000FF",
                                "borderColor" : "#000",
                                "description" : "Low Potential",
                                "fontColor" : "#FFF",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "3",
                                "color" : "#00FF00",
                                "borderColor" : "#000",
                                "description" : "Moderate Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "4",
                                "color" : "#FF9900",
                                "borderColor" : "#000",
                                "description" : "Significant Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "5",
                                "color" : "#FF0000",
                                "borderColor" : "#000",
                                "description" : "Very Significant Potential",
                                "fontColor" : "#000",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "halcrow",
                        "text" : "Halcrow",
                        "provider" : "tilecache",
                        "info" : null,
                        "layerName" : "halcrow_can_ora",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "500",
                                "color" : "#cbe9f4",
                                "borderColor" : "#000",
                                "description" : "Low",
                                "fontColor" : "black",
                                "valueDesc" : "1",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "100",
                                "color" : "#a2e6ff",
                                "borderColor" : "#000",
                                "description" : "Medium",
                                "fontColor" : "black",
                                "valueDesc" : "2",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "200",
                                "color" : "#00b9ff",
                                "borderColor" : "#000",
                                "description" : "Significant",
                                "fontColor" : "black",
                                "valueDesc" : "3",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "50",
                                "color" : "#015271",
                                "borderColor" : "#000",
                                "description" : "Very Significant",
                                "fontColor" : "black",
                                "valueDesc" : "4",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "20",
                                "color" : "#013464",
                                "borderColor" : "#000",
                                "description" : "Extreme",
                                "fontColor" : "black",
                                "valueDesc" : "5",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    },
                    {
                        "name" : "blocks",
                        "text" : "Blocks",
                        "provider" : "WMS",
                        "info" : null,
                        "layerName" : "03447452725579868080-12298073017412879340-4",
                        "opacity" : "0.5",
                        "legend" : {
                            "legend" : [ {
                                "value" : "MPL",
                                "color" : "#C1C1B9",
                                "borderColor" : "#000",
                                "description" : "< 100M",
                                "fontColor" : "black",
                                "valueDesc" : "MPL",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            }, {
                                "value" : "MPL",
                                "color" : "#DEABA6",
                                "borderColor" : "#000",
                                "description" : "> 100M",
                                "fontColor" : "black",
                                "valueDesc" : "MPL",
                                "from" : null,
                                "to" : null,
                                "replacedValue" : null,
                                "width" : null,
                                "valueSet" : null
                            } ],
                            "templateName" : null,
                            "applyToPerils" : true
                        },
                        "perilLegend" : null,
                        "type" : null,
                        "id" : null,
                        "layerType" : "OVERLAY",
                        "url" : "https://earthbuilder.google.com/03447452725579868080-09359381430062338682-4/wms/",
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    }, {
                        "name" : "hurricane-larry",
                        "text" : "Hurricane Larry",
                        "provider" : null,
                        "info" : null,
                        "layerName" : null,
                        "opacity" : null,
                        "legend" : null,
                        "perilLegend" : null,
                        "type" : "IBRACS",
                        "id" : "2006074S13158",
                        "layerType" : "SHAPE",
                        "url" : null,
                        "selected" : false,
                        "mappable" : true,
                        "minZoom" : 0,
                        "maxZoom" : null
                    } ],
            mapOptions : {
                mapMenu : {
                    "items" : [ {
                        "name" : "center"
                    }, {
                        "name" : "analysis"
                    }, {
                        "name" : "streetview"
                    }, {
                        "name" : "zoomin"
                    }, {
                        "name" : "zoomout"
                    }, {
                        "name" : "zoomto"
                    } ]
                },
                mapDefaults : {
                    "lat" : "53.370220573956786",
                    "lng" : "-4.8779296875",
                    "zoom" : 5,
                    "zoomDisabled" : false,
                    "zoomShiftDisabled" : false,
                    "zoomByCenter" : false,
                    "minZoomLevel" : 1,
                    "numZoomLevels" : 20
                },
                shapeDefaults : {
                    "drawingDefaults" : {
                        "lineWidth" : "2",
                        "lineOpacity" : "0.5",
                        "fillColor" : "#c16d61",
                        "lineColor" : "#000",
                        "opacity" : "0.3",
                        "style" : "solid",
                        "font" : "helvetica,arial,verdana,sans-serif"
                    },
                    "radiusDefaults" : null,
                    "importedDefaults" : null,
                    "defaults" : {
                        "lineWidth" : "2",
                        "lineOpacity" : "0.5",
                        "fillColor" : "#EEE",
                        "lineColor" : "#FF6600",
                        "opacity" : "0.5",
                        "style" : "solid",
                        "font" : "helvetica,arial,verdana,sans-serif"
                    }
                },
                "policyViewTypes" : {
                    "items" : [ {
                        "value" : "count",
                        "text" : "By Policy Count",
                        "selected" : true
                    }, {
                        "value" : "tsi",
                        "text" : "By TSI",
                        "selected" : false
                    } ]
                },
                "defaultStrategyOption" : "CLUSTER",
                "clusterDetailThreshold" : 99999,
                "forceClusterZoomLevel" : 1,
                "forceViewportRiskLevel" : 3,
                "maxRiskZoomLevel" : 0,
                "displayPolicyNumberOnHover" : true,
                "displayInsuredNameOnHover" : false,
                "zoomWhenPointInPolygon" : false,
                "globalClusteringEnabled" : false
            },
            "symbology" : {
                "features" : {
                    "features" : [ {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#7ebcd7",
                        "fontColor" : "#fff",
                        "lineColor" : "#7ebcd7",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-blue"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#e8d852",
                        "fontColor" : "#000",
                        "lineColor" : "#e8d852",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-yellow"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#c0ba98",
                        "fontColor" : "#fff",
                        "lineColor" : "#c0ba98",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-gray"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#ae8943",
                        "fontColor" : "#fff",
                        "lineColor" : "#ae8943",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-brown"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#9dcf7f",
                        "fontColor" : "#fff",
                        "lineColor" : "#9dcf7f",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-green"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : "#fff",
                        "fillColor" : "#c16d61",
                        "fontColor" : "#fff",
                        "lineColor" : "#c16d61",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-red"
                    }, {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "#ae99c3",
                        "fontColor" : "#fff",
                        "lineColor" : "#ae99c3",
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "feature-purple"
                    } ]
                },
                "markers" : {
                    "markers" : [ {
                        "width" : 32,
                        "height" : 37,
                        "icon" : "square-blue.png",
                        "name" : "square-blue",
                        "fontStyle" : "normal",
                        "fontColor" : ""
                    }, {
                        "width" : 22,
                        "height" : 35,
                        "icon" : "regular-blue.png",
                        "name" : "regular-blue",
                        "fontStyle" : "normal",
                        "fontColor" : ""
                    } ]
                },
                "riskIconFilters" : {
                    "features" : [ {
                        "lineWidth" : "2",
                        "outlineFillTextColor" : null,
                        "fillColor" : "outlined",
                        "fontColor" : "outline",
                        "lineColor" : null,
                        "opacity" : "1",
                        "lineOpacity" : null,
                        "font" : "Helvetica,arial,verdana,sans-serif",
                        "icon" : null,
                        "name" : "match-level-building"
                    } ]
                }
            },
            "unit" : {
                "value" : "m",
                "description" : "m"
            },
            "dataPanels": null,
            "dataPanelRefs": [
              {
                "name": "books-tsi"
              },
              {
                "name": "accumulation-hotspots"
              },
              {
                "name": "peril-summary"
              }
            ],
            "panels": {
              "books": {
                "controller": "BookControl",
                "name": "books",
                "counter": null,
                "showTotalsForLiveBooks": false,
                "showTotalsForSandboxBooks": false,
                "showExposure": false,
                "maxPanelWidth": 0
              },
              "books-tsi": {
                "controller": "BookTsiControl",
                "name": "books-tsi",
                "counter": [
                  {
                    "name": "tsi",
                    "text": "TSI",
                    "type": "tsi"
                  },
                  {
                    "name": "risk-count",
                    "text": "Risk Count",
                    "type": "risk"
                  }
                ],
                "showTotalsForLiveBooks": true,
                "showTotalsForSandboxBooks": true,
                "showExposure": false,
                "maxPanelWidth": 0
              },
              "accumulation-hotspots": {
                "controller": "AccumulationHSControl",
                "name": "accumulation-hotspots",
                "hotspots": "10",
                "hotspotRange": [
                  {
                    "distance": "500",
                    "hotspots": null,
                    "checkLowerLimit": "15000000",
                    "checkUpperLimit": "18000000"
                  },
                  {
                    "distance": "1000",
                    "hotspots": null,
                    "checkLowerLimit": "15000000",
                    "checkUpperLimit": "20000000"
                  },
                  {
                    "distance": "8000",
                    "hotspots": null,
                    "checkLowerLimit": "50000000",
                    "checkUpperLimit": "65000000"
                  }
                ]
              },
              "peril-summary": {
                "controller": null,
                "name": "peril-summary",
                "countries": null
              },
              "policy-summary": {
                "controller": null,
                "name": "policy-summary"
              }
            },
            currentSession : {
                "southPanelHeight": "238",
                "view": "map",
                "clusterStrategy": "cluster",
                "clusterViewMode": "count",
                "selectedShape": "freehand",
                "selectedColor": "#008080",
                "selectedBooks": "l:all,b:337039",
                "baseMapLayer": "google-streets",
                "lng": "-4.212206372191783",
                "lat": "52.440078046426834",
                "zoom": "6",
                "address": ""
            },
            legendTemplates : [ {
                "legend" : [ {
                    "value" : "1",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "1",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "2",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "2",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "3",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "3",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "4",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "4",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "world"
            }, {
                "legend" : [ {
                    "value" : "0",
                    "color" : "#ebebeb",
                    "borderColor" : "#000",
                    "description" : "None",
                    "fontColor" : "black",
                    "valueDesc" : "0",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "1",
                    "color" : "#bae2f2",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "1",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "2",
                    "color" : "#88d6f4",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "2",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "3",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "3",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "4",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "4",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "5",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Extreme",
                    "fontColor" : "#fff",
                    "valueDesc" : "5",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "jba-fluvial"
            }, {
                "legend" : [ {
                    "value" : "0",
                    "color" : "#ebebeb",
                    "borderColor" : "#000",
                    "description" : "None",
                    "fontColor" : "black",
                    "valueDesc" : "0",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "1",
                    "color" : "#bae2f2",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "1",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "2",
                    "color" : "#88d6f4",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "2",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "3",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "3",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "4",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "4",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "jba"
            }, {
                "legend" : [ {
                    "value" : "0",
                    "color" : "#ebebeb",
                    "borderColor" : "#000",
                    "description" : "None",
                    "fontColor" : "black",
                    "valueDesc" : "0",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "1",
                    "color" : "#bae2f2",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "1",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "2",
                    "color" : "#88d6f4",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "2",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "3",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "3",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "4",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "4",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "jba"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            }, {
                "legend" : [ {
                    "value" : "A",
                    "color" : "#cbe9f4",
                    "borderColor" : "#000",
                    "description" : "Very Low",
                    "fontColor" : "black",
                    "valueDesc" : "A",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "B",
                    "color" : "#a2e6ff",
                    "borderColor" : "#000",
                    "description" : "Low",
                    "fontColor" : "black",
                    "valueDesc" : "B",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "C",
                    "color" : "#00b9ff",
                    "borderColor" : "#000",
                    "description" : "Medium",
                    "fontColor" : "black",
                    "valueDesc" : "C",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "D",
                    "color" : "#0088bb",
                    "borderColor" : "#000",
                    "description" : "Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "D",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                }, {
                    "value" : "E",
                    "color" : "#015271",
                    "borderColor" : "#000",
                    "description" : "Very Significant",
                    "fontColor" : "#fff",
                    "valueDesc" : "E",
                    "from" : null,
                    "to" : null,
                    "replacedValue" : null,
                    "width" : null,
                    "valueSet" : null
                } ],
                "templateName" : null,
                "applyToPerils" : true,
                "name" : "default_bgs"
            } ],
            "pois" : null,
            "options" : [ {
                "name" : "default-shape",
                "value" : "rectangle"
            }, {
                "name" : "show-limits-in-policy-summary",
                "value" : "false"
            }, {
                "name" : "show-tsi-count-rules-manager",
                "value" : "true"
            }, {
                "name" : "change-icon-colour-rules-manager",
                "value" : "true"
            }, {
                "name" : "show-notifications-last-number-days",
                "value" : "90"
            }, {
                "name" : "application-name",
                "value" : "Geo12"
            }, {
                "name" : "date-format",
                "value" : "dd/MM/yyyy"
            }, {
                "name" : "date-display",
                "value" : "d/m/Y G:i a"
            }, {
                "name" : "date-only-display",
                "value" : "d/m/Y"
            }, {
                "name" : "default-currency",
                "value" : "GBP"
            }, {
                "name" : "restore-last-session",
                "value" : "true"
            }, {
                "name" : "geodata-client-id",
                "value" : "generic"
            }, {
                "name" : "upload-processing-refresh-interval",
                "value" : "10"
            }, {
                "name" : "geodata-processing-refresh-interval",
                "value" : "20"
            }, {
                "name" : "theme",
                "value" : "gray"
            }, {
                "name" : "geosearch-username",
                "value" : "TEST_EXPOSURE"
            }, {
                "name" : "geosearch-password",
                "value" : "mapflow123"
            }, {
                "name" : "rules-layers-tabs-visible",
                "value" : "true"
            }, {
                "name" : "days-to-disable-password",
                "value" : "60"
            }, {
                "name" : "max-analysis-addresses",
                "value" : "5"
            }, {
                "name" : "print-disabled",
                "value" : "true"
            }, {
                "name" : "center-analysis-on-row-click",
                "value" : "true"
            }, {
                "name" : "display-all-analysis-circles",
                "value" : "true"
            }, {
                "name" : "apply-rules",
                "value" : "false"
            }, {
                "name" : "https-for-reset-password",
                "value" : "true"
            }, {
                "name" : "marker-icon-path",
                "value" : "icons/markers/"
            }, {
                "name" : "show-risk-location-from-url",
                "value" : "false"
            }, {
                "name" : "show-detail-cluster-max-level-zoom",
                "value" : "true"
            }, {
                "name" : "show-books-last-number-days",
                "value" : "30"
            }, {
                "name" : "zoom-geometry-world",
                "value" : "4"
            }, {
                "name" : "showFloodRollup",
                "value" : "true"
            }, {
                "name" : "book-risks-peril-analysis-active",
                "value" : "true"
            }, {
                "name" : "autoclose-path-to-polygon-meters",
                "value" : "50"
            } ],
            "toolbar" : [ {
                "name" : "file-upload",
                "text" : null,
                "options" : [ {
                    "name" : "force-synonym-review",
                    "value" : "false"
                }, {
                    "name" : "close-window-after-complete",
                    "value" : "true"
                } ]
            }, {
                "name" : "analysis",
                "text" : null,
                "options" : null
            }, {
                "name" : "reports",
                "text" : null,
                "options" : null
            }, {
                "name" : "user-admin",
                "text" : null,
                "options" : [ {
                    "name" : "spacer",
                    "value" : "50"
                } ]
            }, {
                "name" : "shapes",
                "text" : null,
                "options" : [ {
                    "name" : "freehand-buffer-radius",
                    "value" : "50"
                }, {
                    "name" : "freehand-position",
                    "value" : "toolbar"
                }, {
                    "name" : "hide-disable",
                    "value" : "disable"
                } ]
            }, {
                "name" : "distance-calculator",
                "text" : null,
                "options" : [ {
                    "name" : "spacer",
                    "value" : "50"
                } ]
            }, {
                "name" : "view-toggle",
                "text" : null,
                "options" : null
            }, {
                "name" : "layers",
                "text" : null,
                "options" : [ {
                    "name" : "allow-create",
                    "value" : "true"
                } ]
            }, {
                "name" : "notifications",
                "text" : null,
                "options" : null
            }, {
                "name" : "user-menu",
                "text" : null,
                "options" : [ {
                    "name" : "align",
                    "value" : "right"
                } ]
            }, {
                "name" : "logo",
                "text" : null,
                "options" : [ {
                    "name" : "align",
                    "value" : "right"
                }, {
                    "name" : "source",
                    "value" : "http://www.mapflow.com"
                }, {
                    "name" : "name",
                    "value" : "mapflow"
                } ]
            } ],
            geocoders : [ {
                "selected" : true,
                "width" : 350,
                "enterSubmit" : false,
                "resetEnabled" : true,
                "button" : null,
                "type" : "autocomplete",
                "text" : "UK Search",
                "provider" : "mapflow",
                "searchSpaces" : {
                    "searchSpaces" : [ {
                        "buildingIdSearchSpaces" : [ {
                            "buildingIdSearchSpaces" : [ {
                                "name" : "GREAT_BRITAIN_LAT_LONG",
                                "territory" : null
                            } ]
                        } ],
                        "name" : "GREAT BRITAIN_AC",
                        "country" : null,
                        "policySearchSpace" : false
                    }, {
                        "buildingIdSearchSpaces" : null,
                        "name" : "DEMO_POLICIES_SS",
                        "country" : null,
                        "policySearchSpace" : true
                    } ]
                },
                "buildingIdSearchSpace" : null,
                "radiusOptions" : null,
                "analysis" : "force",
                "id" : "uk-search"
            }, {
                "selected" : true,
                "width" : 300,
                "enterSubmit" : false,
                "resetEnabled" : true,
                "button" : null,
                "type" : "autocomplete",
                "text" : "Google Search",
                "provider" : "google",
                "searchSpaces" : null,
                "buildingIdSearchSpace" : null,
                "radiusOptions" : null,
                "analysis" : "optional",
                "id" : "google-search"
            } ],
            "messages" : {
                "properties" : [
                        {
                            "name" : "autocomplete.radius.emptytext",
                            "value" : "Select Radius"
                        },
                        {
                            "name" : "exposure.result.tsi",
                            "value" : "Total Sum Insured"
                        },
                        {
                            "name" : "fileupload.label.error",
                            "value" : "Error"
                        },
                        {
                            "name" : "bookoptions.button.cancel.label",
                            "value" : "Cancel"
                        },
                        {
                            "name" : "demo.risk.detail.hasFireDetectionYesNo",
                            "value" : "Has Fire Detection"
                        },
                        {
                            "name" : "demo.risk.detail.fdefended",
                            "value" : "Defence"
                        },
                        {
                            "name" : "app.static.path",
                            "value" : "1.31.1/"
                        },
                        {
                            "name" : "gridpanel.nodata",
                            "value" : "No data to display, select a book"
                        },
                        {
                            "name" : "user.admin.password.emailsent",
                            "value" : "An email has been sent to the selected user with instructions on how to reset their password"
                        },
                        {
                            "name" : "exposure.title",
                            "value" : "Summary"
                        },
                        {
                            "name" : "risk.detail.buttons.performanalysis",
                            "value" : "Perform Analysis for this risk"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.missing",
                            "value" : "This column heading was not matched, please select the correct value from the drop-down menu on the right"
                        },
                        {
                            "name" : "policysummary.column.insuredName",
                            "value" : "Insured Name"
                        },
                        {
                            "name" : "user.admin.label.email",
                            "value" : "Email"
                        },
                        {
                            "name" : "toolbar.tooltip.view.grid",
                            "value" : "<b>Grid View</b>. Toggles the grid view and displays the selected risks"
                        },
                        {
                            "name" : "demo.risk.detail.swscore",
                            "value" : "SW Score"
                        },
                        {
                            "name" : "layers.add.window.title",
                            "value" : "Add Layer"
                        },
                        {
                            "name" : "demo.risk.detail.country",
                            "value" : "Country"
                        },
                        {
                            "name" : "label.create",
                            "value" : "Create"
                        },
                        {
                            "name" : "label.close",
                            "value" : "Close"
                        },
                        {
                            "name" : "policysummary.label.calculating",
                            "value" : "Calculating"
                        },
                        {
                            "name" : "risk.detail.popup.insuredname",
                            "value" : "Insured Name"
                        },
                        {
                            "name" : "fileupload.label.errors",
                            "value" : "Errors"
                        },
                        {
                            "name" : "fileupload.column.label.rows",
                            "value" : "Rows"
                        },
                        {
                            "name" : "fileupload.error.fileformat",
                            "value" : "The file extension is not valid"
                        },
                        {
                            "name" : "exposure.books.panel.title",
                            "value" : "Policy Books"
                        },
                        {
                            "name" : "exposure.peril.column.description",
                            "value" : "Peril"
                        },
                        {
                            "name" : "bookoptions.settings.book.tsi",
                            "value" : "TSI"
                        },
                        {
                            "name" : "fileupload.label.download-template",
                            "value" : "Download template"
                        },
                        {
                            "name" : "layers.error.minzoom",
                            "value" : "Please zoom in to view layer"
                        },
                        {
                            "name" : "toolbar.tooltip.analysis",
                            "value" : "<b>Analysis</b>. Perform risk or policy analysis at a clicked location on the map."
                        },
                        {
                            "name" : "fileupload.status.waiting",
                            "value" : "Waiting..."
                        },
                        {
                            "name" : "mail.ok",
                            "value" : "Mail sent successfully"
                        },
                        {
                            "name" : "bookoptions.button.launch.tooltip",
                            "value" : "View or modify the book rules, delete or promote uploaded books"
                        },
                        {
                            "name" : "autocomplete.search.pitneyemptytext",
                            "value" : "Please provide city and state / postcode..."
                        },
                        {
                            "name" : "bookoptions.button.clearrules.tooltip",
                            "value" : "Reset this Rules values"
                        },
                        {
                            "name" : "policysummary.column.count",
                            "value" : "Count"
                        },
                        {
                            "name" : "print.window.label.address",
                            "value" : "Address"
                        },
                        {
                            "name" : "fileupload.synonyms.error.empty",
                            "value" : "You did not make a selection, please match one or more headers using the drop down menu"
                        },
                        {
                            "name" : "shape.label.line",
                            "value" : "Path"
                        },
                        {
                            "name" : "demo.risk.detail.combinedfloodscore",
                            "value" : "Combined Flood Score"
                        },
                        {
                            "name" : "print.window.label.count",
                            "value" : "Count"
                        },
                        {
                            "name" : "user.admin.buttons.search",
                            "value" : "Search"
                        },
                        {
                            "name" : "pois.error",
                            "value" : "There was a problem retrieving the points"
                        },
                        {
                            "name" : "toolbar.tooltip.layers",
                            "value" : "<b>Layers</b>. Select a map style or overlay."
                        },
                        {
                            "name" : "fileupload.synonyms.loading.headers",
                            "value" : "Checking file format, please wait"
                        },
                        {
                            "name" : "error.usernotfound",
                            "value" : "The requested user does not exist or has since been removed"
                        },
                        {
                            "name" : "bookoptions.tab.settings.title",
                            "value" : "Settings"
                        },
                        {
                            "name" : "toolbar.tooltip.distance-calculator",
                            "value" : "<b>Distance Calculator</b>. Measure distance."
                        },
                        {
                            "name" : "fileupload.column.label.started",
                            "value" : "Started"
                        },
                        {
                            "name" : "demo.risk.detail.region",
                            "value" : "Region"
                        },
                        {
                            "name" : "map.menu.zoomin",
                            "value" : "Zoom in"
                        },
                        {
                            "name" : "print.window.label.limit",
                            "value" : "Limit"
                        },
                        {
                            "name" : "session.timeout.title",
                            "value" : "Session Timeout"
                        },
                        {
                            "name" : "policysummary.column.print",
                            "value" : "Print this location"
                        },
                        {
                            "name" : "layers.window.label.close",
                            "value" : "Hide Layer"
                        },
                        {
                            "name" : "shapes.messages.busy.modify",
                            "value" : "Please wait for the current calculations to complete before modifying this shape"
                        },
                        {
                            "name" : "reports.buttons.showall",
                            "value" : "Reset Search"
                        },
                        {
                            "name" : "fileupload.column.label.received",
                            "value" : "Received"
                        },
                        {
                            "name" : "shape.label.modifyvertices",
                            "value" : "Modify Vertices"
                        },
                        {
                            "name" : "layers.create.label.url",
                            "value" : "Layer URL"
                        },
                        {
                            "name" : "shape.label.rectangle",
                            "value" : "Rectangle"
                        },
                        {
                            "name" : "user.admin.label.status",
                            "value" : "Status"
                        },
                        {
                            "name" : "reports.search.permission.all",
                            "value" : "All Reports"
                        },
                        {
                            "name" : "bookoptions.field.end.emptytext",
                            "value" : "End"
                        },
                        {
                            "name" : "user.admin.label.status.enabled",
                            "value" : "Enabled"
                        },
                        {
                            "name" : "help.error.notFound",
                            "value" : "The help detail for this item cannot be found"
                        },
                        {
                            "name" : "demo.risk.detail.world_earthquake",
                            "value" : "World Eartquake"
                        },
                        {
                            "name" : "poi.id",
                            "value" : "Id"
                        },
                        {
                            "name" : "exposure.rules.label",
                            "value" : "Create or edit rules and layers for this book"
                        },
                        {
                            "name" : "exposure.peril.column.exposure",
                            "value" : "Exposure"
                        },
                        {
                            "name" : "layers.window.title",
                            "value" : "Active Layers"
                        },
                        {
                            "name" : "user.admin.ok.disabled",
                            "value" : "User has been disabled"
                        },
                        {
                            "name" : "user.admin.error.mail.duplicate",
                            "value" : "This email is already taken, please choose another"
                        },
                        {
                            "name" : "policysummary.column.streetview",
                            "value" : "Street View this location"
                        },
                        {
                            "name" : "layers.window.label.removeall",
                            "value" : "Remove All Layers"
                        },
                        {
                            "name" : "reports.search.permission.mine",
                            "value" : "My Reports"
                        },
                        {
                            "name" : "reports.grid.column.created",
                            "value" : "Created"
                        },
                        {
                            "name" : "fileupload.label.myfiles",
                            "value" : "File history"
                        },
                        {
                            "name" : "notifications.title.window",
                            "value" : "Notifications"
                        },
                        {
                            "name" : "fileupload.synonyms.cancelconfirm",
                            "value" : "Are you sure you wish to abort this file upload?"
                        },
                        {
                            "name" : "demo.risk.detail.jba_swater",
                            "value" : "JBA Swater"
                        },
                        {
                            "name" : "user.admin.error.password.allfields",
                            "value" : "Please fill in all of the required password information"
                        },
                        {
                            "name" : "policysummary.column.limit",
                            "value" : "Limit"
                        },
                        {
                            "name" : "poi.name",
                            "value" : "Name"
                        },
                        {
                            "name" : "policysummary.column.exposure",
                            "value" : "Exposure"
                        },
                        {
                            "name" : "riskanalysis.error.unavailable",
                            "value" : "The Peril Analysis service is currently unavailable, please try again later "
                        },
                        {
                            "name" : "user.admin.ok.enabled",
                            "value" : "User has been enabled"
                        },
                        {
                            "name" : "export.alias.title",
                            "value" : "Report Name"
                        },
                        {
                            "name" : "risk.detail.title",
                            "value" : "Risk Detail"
                        },
                        {
                            "name" : "shape.label.perimeter",
                            "value" : "Perimeter"
                        },
                        {
                            "name" : "toolbar.tooltip.open",
                            "value" : "<b>Open</b>. Open a saved analysis"
                        },
                        {
                            "name" : "poi.detail.column.address",
                            "value" : "Address"
                        },
                        {
                            "name" : "bookoptions.field.percent.emptytext",
                            "value" : "Percent"
                        },
                        {
                            "name" : "toolbar.tooltip.user.admin",
                            "value" : "<b>User Manager</b>. Manage users and their privileges."
                        },
                        {
                            "name" : "toolbar.error.freehand.notenoughpoints",
                            "value" : "Not enough points to calculale the freehand polygon. Please, try to drag a larger line."
                        },
                        {
                            "name" : "filemanager.error.defaultfileupload",
                            "value" : "No more info available"
                        },
                        {
                            "name" : "fileupload.synonyms.alias.text",
                            "value" : "Specify a name for the uploaded book."
                        },
                        {
                            "name" : "toolbar.tooltip.policy-manager",
                            "value" : "<b>Policy Manager</b>. Launch the policy manager tool"
                        },
                        {
                            "name" : "demo.risk.detail.gsls",
                            "value" : "GSLS"
                        },
                        {
                            "name" : "shape.label.riskcount",
                            "value" : "Risk Count"
                        },
                        {
                            "name" : "bookoptions.window.title",
                            "value" : "Book Settings"
                        },
                        {
                            "name" : "shape.label.area",
                            "value" : "Area"
                        },
                        {
                            "name" : "layer.menu.customized",
                            "value" : "My Layers"
                        },
                        {
                            "name" : "shape.label.radius",
                            "value" : "Radius"
                        },
                        {
                            "name" : "demo.risk.detail.us_hurricane",
                            "value" : "US Hurricane"
                        },
                        {
                            "name" : "demo.risk.detail.theft",
                            "value" : "Theft"
                        },
                        {
                            "name" : "reports.buttons.save",
                            "value" : "Save Report"
                        },
                        {
                            "name" : "reports.access.tooltip.role",
                            "value" : "This report can be viewed by anybody in your group"
                        },
                        {
                            "name" : "print.window.title",
                            "value" : "Print location"
                        },
                        {
                            "name" : "demo.risk.detail.localCurrency",
                            "value" : "Local Currency"
                        },
                        {
                            "name" : "risk.detail.panel.title",
                            "value" : "Risk"
                        },
                        {
                            "name" : "label.export",
                            "value" : "Export"
                        },
                        {
                            "name" : "exposure.report.error",
                            "value" : "There was a problem creating the report, please try again"
                        },
                        {
                            "name" : "exposure.result.exposure",
                            "value" : "Exposure"
                        },
                        {
                            "name" : "exposure.peril.column.filter",
                            "value" : "Peril Filter"
                        },
                        {
                            "name" : "shape.label.policycount",
                            "value" : "Policy Count"
                        },
                        {
                            "name" : "poi.detail.column.type",
                            "value" : "Type"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.optional",
                            "value" : "This header is optional"
                        },
                        {
                            "name" : "bookoptions.field.deduction-min.emptytext",
                            "value" : "Ded. Min"
                        },
                        {
                            "name" : "risk.detail.popup.policynum",
                            "value" : "Policy&nbsp;Number"
                        },
                        {
                            "name" : "demo.risk.detail.gwcode",
                            "value" : "GW Code"
                        },
                        {
                            "name" : "feedback.title.emptytext",
                            "value" : "Enter Subject"
                        },
                        {
                            "name" : "toolbar.tooltip.filter",
                            "value" : "<b>Data Filter</b>. Specify a number of criteria to filter the data used for map display and calculations"
                        },
                        {
                            "name" : "fileupload.synonyms.success-info",
                            "value" : "Not all column headings in your file were recognised."
                        },
                        {
                            "name" : "color.red",
                            "value" : "Red"
                        },
                        {
                            "name" : "risk.detail.popup.tsi",
                            "value" : "TSI"
                        },
                        {
                            "name" : "fileupload.synonyms.fail-info",
                            "value" : "Not all column headings in your file were recognized. Please match the unrecognized column headings below with the expected values"
                        },
                        {
                            "name" : "autocomplete.search.nomatches",
                            "value" : "No address matches found"
                        },
                        {
                            "name" : "poi.distance",
                            "value" : "Distance to"
                        },
                        {
                            "name" : "label.pdf",
                            "value" : "PDF"
                        },
                        {
                            "name" : "policysummary.column.difference",
                            "value" : "Difference"
                        },
                        {
                            "name" : "demo.risk.detail.totalContentsCover",
                            "value" : "Total Contents Cover"
                        },
                        {
                            "name" : "demo.risk.detail.floodzone",
                            "value" : "Flood Zone"
                        },
                        {
                            "name" : "user.admin.error.fatal.clientconfig",
                            "value" : "The client config has not loaded correctly. Please check the log file"
                        },
                        {
                            "name" : "user.admin.token.invalid",
                            "value" : "The supplied password token is not valid, please check the link and try again"
                        },
                        {
                            "name" : "toolbar.tooltip.shapes.select",
                            "value" : "<b>Shape Select Tool</b>. Select to move, resize, or rotate shape."
                        },
                        {
                            "name" : "user.admin.buttons.resetpassword",
                            "value" : "Reset password"
                        },
                        {
                            "name" : "map.menu.center",
                            "value" : "Centre Map Here"
                        },
                        {
                            "name" : "risk.detail.buttons.streetview",
                            "value" : "Street view this risk"
                        },
                        {
                            "name" : "fileupload.synonyms.label.saveheaders",
                            "value" : "Accept"
                        },
                        {
                            "name" : "autocomplete.pitney.zip",
                            "value" : "Zip"
                        },
                        {
                            "name" : "bookoptions.tab.layers.title",
                            "value" : "Layers"
                        },
                        {
                            "name" : "reports.access.tooltip.user",
                            "value" : "This report is private"
                        },
                        {
                            "name" : "demo.risk.detail.totalStories",
                            "value" : "Total Stories"
                        },
                        {
                            "name" : "user.admin.operation.notAllow",
                            "value" : "You do not have enough privileges to perform this operation"
                        },
                        {
                            "name" : "label.displaying",
                            "value" : "Displaying"
                        },
                        {
                            "name" : "shape.label.tsi",
                            "value" : "Total Sum Insured"
                        },
                        {
                            "name" : "reports.search.type.xls",
                            "value" : "Excel"
                        },
                        {
                            "name" : "layers.window.label.opacity",
                            "value" : "Opacity"
                        },
                        {
                            "name" : "exposure.perils.panel.title",
                            "value" : "Peril Analysis"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.mandatory",
                            "value" : "This header is mandatory and must be matched with a supplied column"
                        },
                        {
                            "name" : "fileupload.synonyms.file.error.mandatorycolumns",
                            "value" : "There are [0] mandatory columns.\\n The file you uploaded has [1] columns. Please add the missing mandatory columns and try again"
                        },
                        {
                            "name" : "demo.risk.detail.constructionType",
                            "value" : "Construction Type"
                        },
                        {
                            "name" : "label.csv",
                            "value" : "CSV"
                        },
                        {
                            "name" : "fileupload.column.label.filename",
                            "value" : "Filename"
                        },
                        {
                            "name" : "fileupload.synonyms.loading.savesynonyms",
                            "value" : "Saving the synonyms, please wait"
                        },
                        {
                            "name" : "menu.cancel",
                            "value" : "Cancel"
                        },
                        {
                            "name" : "shape.menu.state.active",
                            "value" : "Enable Shape"
                        },
                        {
                            "name" : "demo.risk.detail.geocodedScore",
                            "value" : "Geocoded Score"
                        },
                        {
                            "name" : "demo.risk.detail.ccode",
                            "value" : "CCode"
                        },
                        {
                            "name" : "shape.label.calculating",
                            "value" : "Calculating..."
                        },
                        {
                            "name" : "bookoptions.settings.book.colour",
                            "value" : "Book Colour"
                        },
                        {
                            "name" : "policy.risk.nopermission",
                            "value" : "You do not have permission to view the detail of this risk"
                        },
                        {
                            "name" : "shape.label.width",
                            "value" : "Width"
                        },
                        {
                            "name" : "bookoptions.tab.rules.title",
                            "value" : "Rules"
                        },
                        {
                            "name" : "reports.grid.column.owner",
                            "value" : "Owner"
                        },
                        {
                            "name" : "fileupload.synonyms.column.headertype",
                            "value" : "Header Type"
                        },
                        {
                            "name" : "feedback.buttons.send",
                            "value" : "Send Feedback"
                        },
                        {
                            "name" : "demo.risk.detail.lng",
                            "value" : "Longitude"
                        },
                        {
                            "name" : "reports.edit.share.mygroup",
                            "value" : "Users in my role"
                        },
                        {
                            "name" : "user.admin.label.broker",
                            "value" : "Broker"
                        },
                        {
                            "name" : "bookoptions.field.limit.emptytext",
                            "value" : "Limit"
                        },
                        {
                            "name" : "fileupload.label.file",
                            "value" : "File"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.title.missing",
                            "value" : "is missing"
                        },
                        {
                            "name" : "feedback.label.category",
                            "value" : "Type"
                        },
                        {
                            "name" : "policysummary.column.tsi",
                            "value" : "TSI"
                        },
                        {
                            "name" : "color.green",
                            "value" : "Green"
                        },
                        {
                            "name" : "user.admin.combobox.roles.all",
                            "value" : "All Roles"
                        },
                        {
                            "name" : "label.hide",
                            "value" : "Hide"
                        },
                        {
                            "name" : "bookoptions.loading.load",
                            "value" : "Loading Rules..."
                        },
                        {
                            "name" : "error.ajax",
                            "value" : "Sorry, an error has occurred and our administrators have been notified. Please try again later."
                        },
                        {
                            "name" : "demo.risk.detail.swcode",
                            "value" : "SW Code"
                        },
                        {
                            "name" : "demo.risk.detail.gsrs",
                            "value" : "GSRS"
                        },
                        {
                            "name" : "menu.label.options",
                            "value" : "Options"
                        },
                        {
                            "name" : "label.dialog.error",
                            "value" : "Error"
                        },
                        {
                            "name" : "demo.risk.detail.jba_tidal",
                            "value" : "JBA Tidal"
                        },
                        {
                            "name" : "exposure.report.nobooks",
                            "value" : "Please select at least one book first"
                        },
                        {
                            "name" : "demo.risk.detail.machineryAndPlantValue",
                            "value" : "Machinery And PlantValue"
                        },
                        {
                            "name" : "demo.risk.detail.tofcat10",
                            "value" : "Tofcat 10"
                        },
                        {
                            "name" : "risk.detail.popup.count",
                            "value" : "Count"
                        },
                        {
                            "name" : "autocomplete.pitney.state",
                            "value" : "State"
                        },
                        {
                            "name" : "notifications.date",
                            "value" : "Date"
                        },
                        {
                            "name" : "app.version",
                            "value" : "Version 1.31.1"
                        },
                        {
                            "name" : "fileupload.synonyms.file.error.optionalheaders",
                            "value" : "[0] optional headers unmatched."
                        },
                        {
                            "name" : "reports.edit.share.owner",
                            "value" : "Private"
                        },
                        {
                            "name" : "demo.risk.detail.totalSiteWorkers",
                            "value" : "Total Site Workers"
                        },
                        {
                            "name" : "distancemeasure.label.area",
                            "value" : "Area"
                        },
                        {
                            "name" : "demo.risk.detail.totalStockValue",
                            "value" : "Total Stock Value"
                        },
                        {
                            "name" : "print.window.label.exposure",
                            "value" : "Exposure"
                        },
                        {
                            "name" : "layers.window.label.hide",
                            "value" : "Hide Layer"
                        },
                        {
                            "name" : "risk.detail.buttons.zoom",
                            "value" : "Zoom to this risk"
                        },
                        {
                            "name" : "risk.detail.exposurefield.tooltip",
                            "value" : "Insert new exposure value to recalculate"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.matched",
                            "value" : "This column heading was successfully matched"
                        },
                        {
                            "name" : "feedback.alert.failure",
                            "value" : "There was a problem submitting the feedback, please try again later"
                        },
                        {
                            "name" : "feedback.window.title",
                            "value" : "User Feedback"
                        },
                        {
                            "name" : "user.admin.search.emptytext",
                            "value" : "Search Users..."
                        },
                        {
                            "name" : "shapes.messages.confirmdelete",
                            "value" : "Delete the current shape?"
                        },
                        {
                            "name" : "fileupload.column.label.status",
                            "value" : "Status"
                        },
                        {
                            "name" : "policysummary.title",
                            "value" : "Accumulations"
                        },
                        {
                            "name" : "demo.risk.detail.stockInTransitValue",
                            "value" : "Stock In Transit Value"
                        },
                        {
                            "name" : "fileupload.synonyms.error.invalid.duplicate",
                            "value" : "You have matched more than one file column to the same expected column. Please ensure each column heading from your file is matched to a unique expected column.<br/><br/>Duplicate matching columns: <b>[0]</b>"
                        },
                        {
                            "name" : "help.window.title",
                            "value" : "Help"
                        },
                        {
                            "name" : "poi.detail.column.town",
                            "value" : "Town"
                        },
                        {
                            "name" : "fileupload.synonyms.error.error",
                            "value" : "There was a problem updating the headers, please try again"
                        },
                        {
                            "name" : "max.zoom.current.layer.message",
                            "value" : "Maximum zoom level for current layer"
                        },
                        {
                            "name" : "demo.risk.detail.floodrisk",
                            "value" : "Flood Risk"
                        },
                        {
                            "name" : "user.admin.form.invalid",
                            "value" : "The form contains errors, please fix the errors and try again"
                        },
                        {
                            "name" : "menu.label.documentation",
                            "value" : "Documentation"
                        },
                        {
                            "name" : "filemanager.window.title",
                            "value" : "File Manager"
                        },
                        {
                            "name" : "demo.risk.detail.totalBuildingCover",
                            "value" : "Total Building Cover"
                        },
                        {
                            "name" : "bookoptions.button.save.label",
                            "value" : "Save"
                        },
                        {
                            "name" : "fileupload.label.select-file",
                            "value" : "Select File..."
                        },
                        {
                            "name" : "user.error.change.password",
                            "value" : "Sorry it is not possible to change the password right now"
                        },
                        {
                            "name" : "autocomplete.pitney.search",
                            "value" : "Search"
                        },
                        {
                            "name" : "user.admin.buttons.remove",
                            "value" : "Remove"
                        },
                        {
                            "name" : "map.menu.zoomout",
                            "value" : "Zoom out"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.title.optional",
                            "value" : "is optional"
                        },
                        {
                            "name" : "toolbar.tooltip.buffer-button-tool",
                            "value" : "<b>Buffer Line Tool.</b>"
                        },
                        {
                            "name" : "exposure.report.error.maxsize",
                            "value" : "The maximum number of risks that can be displayed in a report is <b>[0]</b>, the current risk count is <b>[1]</b>.<br/><br/>Please narrow your search region using the drawing tools and try again"
                        },
                        {
                            "name" : "print.window.label.radius",
                            "value" : "Radius"
                        },
                        {
                            "name" : "demo.risk.detail.australia_flood",
                            "value" : "Australia Flood"
                        },
                        {
                            "name" : "shape.menu.state.inactive",
                            "value" : "Disable Shape"
                        },
                        {
                            "name" : "user.admin.label.username",
                            "value" : "Username"
                        },
                        {
                            "name" : "layers.window.loading",
                            "value" : "Loading"
                        },
                        {
                            "name" : "toolbar.tooltip.shapes",
                            "value" : "<b>Shapes</b>. Draw [0]"
                        },
                        {
                            "name" : "fileupload.synonyms.column.matchedto",
                            "value" : "Matched Header"
                        },
                        {
                            "name" : "user.admin.label.id",
                            "value" : "ID"
                        },
                        {
                            "name" : "label.dialog.info",
                            "value" : "Information"
                        },
                        {
                            "name" : "app.tagline",
                            "value" : "Over 8,000 commercial underwriters worldwide rely on Mapflow to assess their risk and manage their exposure"
                        },
                        {
                            "name" : "demo.policy.detail.account",
                            "value" : "Account"
                        },
                        {
                            "name" : "map.menu.zoomto",
                            "value" : "Zoom to"
                        },
                        {
                            "name" : "shape.label.state.inactive",
                            "value" : "Disabled"
                        },
                        {
                            "name" : "demo.risk.detail.gsss",
                            "value" : "GSSS"
                        },
                        {
                            "name" : "shape.import.error.notfound",
                            "value" : "The specified shape was not found, please try again later"
                        },
                        {
                            "name" : "user.admin.label.forename",
                            "value" : "Name"
                        },
                        {
                            "name" : "demo.risk.detail.tofcat5",
                            "value" : "Tofcat 5"
                        },
                        {
                            "name" : "feedback.category.error",
                            "value" : "Report an Error"
                        },
                        {
                            "name" : "autocomplete.search.label.performanalysis",
                            "value" : "Perform Analysis"
                        },
                        {
                            "name" : "analysis.error.maxaddresses",
                            "value" : "Sorry, it is only possible to analyse [0] addresses at once, please remove an address and try again"
                        },
                        {
                            "name" : "user.admin.window.title",
                            "value" : "User Administration"
                        },
                        {
                            "name" : "fileupload.synonyms.column.fileheader",
                            "value" : "File Header"
                        },
                        {
                            "name" : "user.admin.ok.saved",
                            "value" : "User has been saved"
                        },
                        {
                            "name" : "user.admin.error.info.reset.password.invalid",
                            "value" : "Invalid information provided for resetting the password"
                        },
                        {
                            "name" : "export.excel.sheets.risks.name",
                            "value" : "Risks"
                        },
                        {
                            "name" : "user.admin.remove.confirm",
                            "value" : "Are you sure you wish to remove this user?"
                        },
                        {
                            "name" : "fileupload.synonyms.alias.title",
                            "value" : "Book Alias"
                        },
                        {
                            "name" : "demo.risk.detail.occupancyCode",
                            "value" : "Occupancy Code"
                        },
                        {
                            "name" : "bookoptions.policy.label",
                            "value" : "Policy Number"
                        },
                        {
                            "name" : "poi.window.title",
                            "value" : "Points of interest details"
                        },
                        {
                            "name" : "reports.access.tooltip.client",
                            "value" : "This report can be viewed by anybody in your organisation"
                        },
                        {
                            "name" : "reports.search.type.all",
                            "value" : "All Formats"
                        },
                        {
                            "name" : "demo.risk.detail.sturmflut",
                            "value" : "SturmFlut"
                        },
                        {
                            "name" : "user.admin.label.surname",
                            "value" : "Surname"
                        },
                        {
                            "name" : "reports.buttons.delete",
                            "value" : "Delete Report"
                        },
                        {
                            "name" : "feedback.category.suggestion",
                            "value" : "Suggestions"
                        },
                        {
                            "name" : "riskanalysis.rolluptitle",
                            "value" : "Flood"
                        },
                        {
                            "name" : "fileupload.info.success",
                            "value" : "File uploaded successfully. Please wait while the file now processes"
                        },
                        {
                            "name" : "fileupload.label.completed",
                            "value" : "Completed"
                        },
                        {
                            "name" : "demo.risk.detail.address2",
                            "value" : "Address 2"
                        },
                        {
                            "name" : "demo.risk.detail.address1",
                            "value" : "Address 1"
                        },
                        {
                            "name" : "exposure.loading",
                            "value" : "Calculating Exposure, please wait..."
                        },
                        {
                            "name" : "fileupload.status.tagging_phase",
                            "value" : "Tagging..."
                        },
                        {
                            "name" : "fileupload.synonyms.column.fileissues",
                            "value" : "File issues"
                        },
                        {
                            "name" : "shape.label.state.active",
                            "value" : "Enabled"
                        },
                        {
                            "name" : "shape.label.length",
                            "value" : "Line Length"
                        },
                        {
                            "name" : "exposure.peril.column.riskcount",
                            "value" : "Risk Count"
                        },
                        {
                            "name" : "reports.buttons.download",
                            "value" : "Download [0] report"
                        },
                        {
                            "name" : "export.excel.sheets.policies.name",
                            "value" : "Policies"
                        },
                        {
                            "name" : "demo.risk.detail.fscore",
                            "value" : "F Score"
                        },
                        {
                            "name" : "bookoptions.save.success",
                            "value" : "The Rules and Layers have been successfully updated"
                        },
                        {
                            "name" : "demo.risk.detail.hasIntruderDetectionAlarmYesNo",
                            "value" : "Has Intruder Detection Alarm"
                        },
                        {
                            "name" : "fileupload.error.upload",
                            "value" : "There was a problem with the file '[0]': [1]"
                        },
                        {
                            "name" : "user.admin.error.password.change.invalid",
                            "value" : "The password you entered is not valid. Please ensure it complies with the following rules:"
                        },
                        {
                            "name" : "fileupload.loading.upload",
                            "value" : "Please wait, Uploading file..."
                        },
                        {
                            "name" : "demo.policy.detail.policyNumber",
                            "value" : "Policy #"
                        },
                        {
                            "name" : "reports.window.title",
                            "value" : "Reports"
                        },
                        {
                            "name" : "toolbar.tooltip.save",
                            "value" : "<b>Save</b>. Save current analysis"
                        },
                        {
                            "name" : "exposure.report.error.doesnotexist",
                            "value" : "The requested report does not exist or has since been removed"
                        },
                        {
                            "name" : "loading.default",
                            "value" : "Please wait..."
                        },
                        {
                            "name" : "print.window.label.user",
                            "value" : "User"
                        },
                        {
                            "name" : "booksoptions.actions.remove",
                            "value" : "Delete Book"
                        },
                        {
                            "name" : "shape.label.dragrotateresize",
                            "value" : "Drag, Rotate or Resize"
                        },
                        {
                            "name" : "fileupload.label.upload-file",
                            "value" : "Upload File"
                        },
                        {
                            "name" : "shape.label.polygon",
                            "value" : "Polygon"
                        },
                        {
                            "name" : "demo.risk.detail.gsd",
                            "value" : "GSD"
                        },
                        {
                            "name" : "demo.risk.detail.gsc",
                            "value" : "GSC"
                        },
                        {
                            "name" : "user.admin.error.user.disable",
                            "value" : "The current user is disabled. Please contact your administrator"
                        },
                        {
                            "name" : "demo.risk.detail.logicalId",
                            "value" : "Logical ID"
                        },
                        {
                            "name" : "risk.detail.popup.combinedtsi",
                            "value" : "Combined TSI"
                        },
                        {
                            "name" : "color.black",
                            "value" : "Black"
                        },
                        {
                            "name" : "label.reset",
                            "value" : "Reset"
                        },
                        {
                            "name" : "demo.risk.filter.postcode",
                            "value" : "Geocoded match level of Postcode"
                        },
                        {
                            "name" : "demo.risk.detail.totalDeductible",
                            "value" : "Total Deductible"
                        },
                        {
                            "name" : "fileupload.column.label.alias",
                            "value" : "Name"
                        },
                        {
                            "name" : "session.timeout.message",
                            "value" : "Your current session has expired. Please click below to log in again."
                        },
                        {
                            "name" : "user.admin.error.not.found",
                            "value" : "The requested user does not exist or has been removed"
                        },
                        {
                            "name" : "user.admin.error.access.denied",
                            "value" : "Sorry, access unavailable from this IP address"
                        },
                        {
                            "name" : "exposure.result.riskcount",
                            "value" : "Risk Count"
                        },
                        {
                            "name" : "reports.search.type.csv",
                            "value" : "CSV"
                        },
                        {
                            "name" : "demo.risk.detail.us_fema",
                            "value" : "US FEMA"
                        },
                        {
                            "name" : "bookoptions.button.newlayer.tooltip",
                            "value" : "Add a new Layer"
                        },
                        {
                            "name" : "map.icon.cluster.on",
                            "value" : "Clustered Markers"
                        },
                        {
                            "name" : "toolbar.tooltip.deleteshape",
                            "value" : "<b>Delete Shape</b>. Remove the current shape and its analysis"
                        },
                        {
                            "name" : "demo.risk.detail.tof",
                            "value" : "TOF"
                        },
                        {
                            "name" : "rollup.check",
                            "value" : "Check"
                        },
                        {
                            "name" : "toolbar.label.logout",
                            "value" : "Logout"
                        },
                        {
                            "name" : "policysummary.label.radius",
                            "value" : "Radius"
                        },
                        {
                            "name" : "notifications.application.update",
                            "value" : "Application Update"
                        },
                        {
                            "name" : "bookoptions.field.start.emptytext",
                            "value" : "Start"
                        },
                        {
                            "name" : "fileupload.export.label.results",
                            "value" : "Report"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.title.matched",
                            "value" : "is matched"
                        },
                        {
                            "name" : "demo.policy.detail.endDate",
                            "value" : "End Date"
                        },
                        {
                            "name" : "fileupload.synonyms.column.status",
                            "value" : "Status"
                        },
                        {
                            "name" : "reports.search.permission.shared",
                            "value" : "Shared Reports"
                        },
                        {
                            "name" : "demo.risk.detail.gwscore",
                            "value" : "GW Score"
                        },
                        {
                            "name" : "exposure.books.panel.bookanalysis.activatetooltip",
                            "value" : "Start peril analysis for this book"
                        },
                        {
                            "name" : "user.admin.error.username.duplicate",
                            "value" : "This username is already taken, please choose another"
                        },
                        {
                            "name" : "user.admin.buttons.save",
                            "value" : "Save"
                        },
                        {
                            "name" : "print.window.label.tsi",
                            "value" : "TSI"
                        },
                        {
                            "name" : "filemanager.error.windowactive",
                            "value" : "The file manager dialog is already active"
                        },
                        {
                            "name" : "map.icon.cluster.off",
                            "value" : "Single Markers"
                        },
                        {
                            "name" : "error.timeout",
                            "value" : "You have been logged out due to inactivity. Please log in again to begin a new session"
                        },
                        {
                            "name" : "exposure.peril.column.selectedperils",
                            "value" : "Selected Perils"
                        },
                        {
                            "name" : "bookoptions.delete.confirm",
                            "value" : "Do you really wish to remove this book? This action cannot be undone"
                        },
                        {
                            "name" : "label.of",
                            "value" : "of"
                        },
                        {
                            "name" : "exposure.books.panel.bookanalysis.disabletooltip",
                            "value" : "Remove peril analysis for this book"
                        },
                        {
                            "name" : "demo.risk.detail.canada_flood",
                            "value" : "Canada Flood"
                        },
                        {
                            "name" : "bookoptions.field.deductible.emptytext",
                            "value" : "Deductible"
                        },
                        {
                            "name" : "toolbar.tooltip.reports",
                            "value" : "<b>Reports</b>. Download and view historical reports."
                        },
                        {
                            "name" : "user.admin.error.password.userNotExist",
                            "value" : "User not found in the database"
                        },
                        {
                            "name" : "label.ok",
                            "value" : "OK"
                        },
                        {
                            "name" : "export.alias.text",
                            "value" : "Please enter a name for this report"
                        },
                        {
                            "name" : "fileupload.synonyms.error.headers",
                            "value" : "The file headers were invalid, please check your file and try again"
                        },
                        {
                            "name" : "user.admin.error.user.deleted",
                            "value" : "User not found in the database"
                        },
                        {
                            "name" : "mail.user.reset.passworsubject",
                            "value" : "Recover password"
                        },
                        {
                            "name" : "reports.grid.column.comments",
                            "value" : "Comments"
                        },
                        {
                            "name" : "exposure.report.error.delete",
                            "value" : "There was a problem encountered while deleting the report, please try again"
                        },
                        {
                            "name" : "bookoptions.layers.invalidlayer",
                            "value" : "Please complete the current layer fully before adding a new layer"
                        },
                        {
                            "name" : "bookoptions.button.saveandclose.label",
                            "value" : "Save changes"
                        },
                        {
                            "name" : "fileupload.error.uploadfail",
                            "value" : "There was a problem uploading the file, please try again later"
                        },
                        {
                            "name" : "riskanalysis.title",
                            "value" : "Perils"
                        },
                        {
                            "name" : "demo.risk.detail.status",
                            "value" : "Status"
                        },
                        {
                            "name" : "shape.error.busy",
                            "value" : "Please wait until current calculations are completed"
                        },
                        {
                            "name" : "user.admin.buttons.showall",
                            "value" : "Reset Search"
                        },
                        {
                            "name" : "user.admin.error.passwordexpired",
                            "value" : "Your password has expired. Please enter a new password below"
                        },
                        {
                            "name" : "fileupload.error.windowactive",
                            "value" : "The upload dialog is already active"
                        },
                        {
                            "name" : "exposure.books.mixedicon",
                            "value" : "Mixed Filtered Icon"
                        },
                        {
                            "name" : "fileupload.export.label.graph",
                            "value" : "Graphs"
                        },
                        {
                            "name" : "fileupload.synonyms.label.cancelandclose",
                            "value" : "Close"
                        },
                        {
                            "name" : "autocomplete.pitney.enterzipstate",
                            "value" : "Please enter the Zip and/or State"
                        },
                        {
                            "name" : "map.menu.analysis",
                            "value" : "Perform Analysis Here"
                        },
                        {
                            "name" : "toolbar.tooltip.new",
                            "value" : "<b>New</b>. Create a new analysis"
                        },
                        {
                            "name" : "user.admin.label.role",
                            "value" : "Role"
                        },
                        {
                            "name" : "max.zoom.current.layer.title",
                            "value" : "Zoom level"
                        },
                        {
                            "name" : "shape.label.exposure",
                            "value" : "Exposure"
                        },
                        {
                            "name" : "export.error.namerequired",
                            "value" : "A report name is required"
                        },
                        {
                            "name" : "terms.button.reject",
                            "value" : "Disagree"
                        },
                        {
                            "name" : "analysis.column.apply",
                            "value" : "Apply changes"
                        },
                        {
                            "name" : "bookoptions.settings.book.riskcount",
                            "value" : "Risk Count"
                        },
                        {
                            "name" : "demo.risk.detail.floodproximity",
                            "value" : "Flood Proximity"
                        },
                        {
                            "name" : "fileupload.synonyms.error.unavailable",
                            "value" : "The validation service is currently unavailable, please try again later"
                        },
                        {
                            "name" : "reports.search.type.pdf",
                            "value" : "PDF"
                        },
                        {
                            "name" : "demo.risk.detail.hasFireAlarmYesNo",
                            "value" : "Has Fire Alarm"
                        },
                        {
                            "name" : "accumulationHS.valueHeader",
                            "value" : "TSI"
                        },
                        {
                            "name" : "user.admin.label.clientId",
                            "value" : "Client"
                        },
                        {
                            "name" : "fileupload.synonyms.tip.title.mandatory",
                            "value" : "is a mandatory column"
                        },
                        {
                            "name" : "color.orange",
                            "value" : "Orange"
                        },
                        {
                            "name" : "demo.risk.detail.geocodedAddress",
                            "value" : "Geocoded Address"
                        },
                        {
                            "name" : "analysis.error.countryNotAllowed",
                            "value" : "Sorry, it is not allowed to perform an analysis in this country ([0])."
                        },
                        {
                            "name" : "shape.label.active",
                            "value" : "State"
                        },
                        {
                            "name" : "demo.risk.detail.jba_ground",
                            "value" : "JBA Ground"
                        },
                        {
                            "name" : "fileupload.synonyms.window.title",
                            "value" : "File Check"
                        },
                        {
                            "name" : "export.excel.sheets.summary.name",
                            "value" : "Summary"
                        },
                        {
                            "name" : "user.admin.label.agent",
                            "value" : "Agent"
                        },
                        {
                            "name" : "label.refresh",
                            "value" : "Refresh"
                        },
                        {
                            "name" : "poi.detail.column.name",
                            "value" : "Name"
                        },
                        {
                            "name" : "user.admin.combobox.roles",
                            "value" : "Roles"
                        },
                        {
                            "name" : "map.cluster.type.label",
                            "value" : "View Risks"
                        },
                        {
                            "name" : "booksoptions.actions.rules",
                            "value" : "Rules Manager"
                        },
                        {
                            "name" : "analysis.column.remove",
                            "value" : "Remove this address"
                        },
                        {
                            "name" : "demo.risk.detail.cscore",
                            "value" : "C Score"
                        },
                        {
                            "name" : "bookoptions.button.clearlayer.tooltip",
                            "value" : "Reset this Layers values"
                        },
                        {
                            "name" : "demo.risk.detail.dbscore",
                            "value" : "DB Score"
                        },
                        {
                            "name" : "color.blue",
                            "value" : "Blue"
                        },
                        {
                            "name" : "exposure.result.policycount",
                            "value" : "Policy Count"
                        },
                        {
                            "name" : "user.admin.label.status.disabled",
                            "value" : "Disabled"
                        },
                        {
                            "name" : "exposure.peril.column.perilCategories",
                            "value" : "Legend"
                        },
                        {
                            "name" : "bookoptions.field.deduction-max.emptytext",
                            "value" : "Ded. Max"
                        },
                        {
                            "name" : "poi.error.notfound",
                            "value" : "Point of Interest was not found"
                        },
                        {
                            "name" : "label.dialog.confirm",
                            "value" : "Confirmation Required"
                        },
                        {
                            "name" : "user.admin.label.locale",
                            "value" : "Language"
                        },
                        {
                            "name" : "bookoptions.settings.book.name",
                            "value" : "Book Name"
                        },
                        {
                            "name" : "layer.menu.create",
                            "value" : "Add Layer"
                        },
                        {
                            "name" : "export.error.nopermission",
                            "value" : "You do not have permission to view this report"
                        },
                        {
                            "name" : "demo.risk.filter.building",
                            "value" : "Geocoded match level of Building"
                        },
                        {
                            "name" : "poi.coordinates",
                            "value" : "Coordinates"
                        },
                        {
                            "name" : "print.window.button",
                            "value" : "Print"
                        },
                        {
                            "name" : "demo.risk.detail.geocodedMatchLevel",
                            "value" : "Geocoded Match Level"
                        },
                        {
                            "name" : "error.geocode",
                            "value" : "The address could not be geocoded at the moment, please try again later"
                        },
                        {
                            "name" : "distancemeasure.window.title",
                            "value" : "Distance Calculator"
                        },
                        {
                            "name" : "fileupload.column.label.lastupdated",
                            "value" : "Last Update"
                        },
                        {
                            "name" : "user.admin.ok.removed",
                            "value" : "User has been removed"
                        },
                        {
                            "name" : "fileupload.status.validation_phase",
                            "value" : "Validating..."
                        },
                        {
                            "name" : "user.admin.error.password.notMatch",
                            "value" : "Password not match, please try again"
                        },
                        {
                            "name" : "error.service.unavailable",
                            "value" : "We are sorry, the service is currently unavailable, please try again later"
                        },
                        {
                            "name" : "demo.risk.detail.zip",
                            "value" : "ZIP"
                        },
                        {
                            "name" : "print.window.label.difference",
                            "value" : "Difference"
                        },
                        {
                            "name" : "rollup.refer",
                            "value" : "Refer"
                        },
                        {
                            "name" : "user.admin.loading",
                            "value" : "Loading"
                        },
                        {
                            "name" : "exposure.peril.emptymessage",
                            "value" : "No Peril Data"
                        },
                        {
                            "name" : "locale.es",
                            "value" : "Spanish"
                        },
                        {
                            "name" : "user.admin.error.incorrect.login.credentials",
                            "value" : "The username or password provided was invalid, please try again"
                        },
                        {
                            "name" : "reports.edit.share.all",
                            "value" : "All Users"
                        },
                        {
                            "name" : "poi.detail.column.id",
                            "value" : "Id"
                        },
                        {
                            "name" : "reports.search.emptytext",
                            "value" : "Search report name"
                        },
                        {
                            "name" : "toolbar.tooltip.currency-converter",
                            "value" : "<b>Currency Converter</b>. Convert a given base value into multiple different currencies"
                        },
                        {
                            "name" : "error.unknown",
                            "value" : "We are sorry, a system error has occurred. Our administrators have been notified"
                        },
                        {
                            "name" : "terms.button.accept",
                            "value" : "Agree"
                        },
                        {
                            "name" : "exposure.files.loading",
                            "value" : "Loading Files"
                        },
                        {
                            "name" : "analysis.error.busy",
                            "value" : "Please wait for the current analysis to complete first"
                        },
                        {
                            "name" : "fileupload.synonyms.file.error.mandatoryheaders",
                            "value" : "[0] mandatory headers unmatched."
                        },
                        {
                            "name" : "demo.risk.detail.world_flood",
                            "value" : "World Flood"
                        },
                        {
                            "name" : "layers.window.label.info",
                            "value" : "Information"
                        },
                        {
                            "name" : "fileupload.synonyms.combo.emptytext",
                            "value" : "Choose Match"
                        },
                        {
                            "name" : "map.loading",
                            "value" : "Loading map features..."
                        },
                        {
                            "name" : "policy.risk.notfound",
                            "value" : "The requested risk does not exist or has since been removed"
                        },
                        {
                            "name" : "locale.en",
                            "value" : "English"
                        },
                        {
                            "name" : "user.admin.ok.passwordchanged",
                            "value" : "User password has been been changed, you may now login to the application"
                        },
                        {
                            "name" : "reports.remove.confirm",
                            "value" : "Are you sure you wish to delete this report?"
                        },
                        {
                            "name" : "layers.create.label.layer",
                            "value" : "Layer Name"
                        },
                        {
                            "name" : "fileupload.synonyms.error.invalid.selection",
                            "value" : "You have not selected a match for all missing column headings, please check and try again"
                        },
                        {
                            "name" : "shape.label.buffer",
                            "value" : "Buffer"
                        },
                        {
                            "name" : "demo.risk.detail.terror",
                            "value" : "Terror"
                        },
                        {
                            "name" : "print.window.label.date",
                            "value" : "Date"
                        },
                        {
                            "name" : "reports.edit.label.comments",
                            "value" : "Comments"
                        },
                        {
                            "name" : "streetview.error.unavailable",
                            "value" : "There is no Street View data available at this location"
                        },
                        {
                            "name" : "toolbar.tooltip.fileupload",
                            "value" : "<b>File Upload</b>. Upload a file."
                        },
                        {
                            "name" : "menu.label.feedback",
                            "value" : "Send Feedback"
                        },
                        {
                            "name" : "demo.risk.detail.valueOfComputerEquipment",
                            "value" : "Value Of Computer Equipment"
                        },
                        {
                            "name" : "user.admin.error.user.clientinvalid",
                            "value" : "Client is invalid. Please contact your administrator"
                        },
                        {
                            "name" : "shape.label.circle",
                            "value" : "Circle"
                        },
                        {
                            "name" : "fileupload.label.processing",
                            "value" : "Processing"
                        },
                        {
                            "name" : "shape.label.circumference",
                            "value" : "Circumference"
                        },
                        {
                            "name" : "menu.label.about",
                            "value" : "About"
                        },
                        {
                            "name" : "shapes.messages.busy.new",
                            "value" : "Please wait for the current calculations to complete before drawing a new shape"
                        },
                        {
                            "name" : "shape.label.height",
                            "value" : "Height"
                        },
                        {
                            "name" : "demo.policy.detail.insuredName",
                            "value" : "Insured Name"
                        },
                        {
                            "name" : "demo.risk.detail.jba_fluvial",
                            "value" : "JBA Fluvial"
                        },
                        {
                            "name" : "user.admin.ok.password.reset",
                            "value" : "Please check your email inbox for instructions on how to reset your password"
                        },
                        {
                            "name" : "exposure.report.error.update",
                            "value" : "There was a problem encountered while updating the report, please try again"
                        },
                        {
                            "name" : "color.purple",
                            "value" : "Purple"
                        },
                        {
                            "name" : "autocomplete.pitney.street",
                            "value" : "Street"
                        },
                        {
                            "name" : "mail.user.reset.passwordsubject",
                            "value" : "Change password"
                        },
                        {
                            "name" : "demo.policy.detail.startDate",
                            "value" : "Start Date"
                        },
                        {
                            "name" : "demo.risk.detail.totalReinstatementCost",
                            "value" : "Total Reinstatement Cost"
                        },
                        {
                            "name" : "demo.risk.detail.california_earthquake",
                            "value" : "California Earthquake"
                        },
                        {
                            "name" : "autocomplete.pitney.city",
                            "value" : "City"
                        },
                        {
                            "name" : "label.loading",
                            "value" : "Loading..."
                        },
                        {
                            "name" : "user.admin.buttons.cancel",
                            "value" : "Cancel"
                        },
                        {
                            "name" : "pois.layer.menu.title",
                            "value" : "Points of Interest"
                        },
                        {
                            "name" : "shapes.messages.invalidzoom",
                            "value" : "The shape tools are disabled for this zoom level. Please zoom in and try again"
                        },
                        {
                            "name" : "user.admin.buttons.add.user",
                            "value" : "Add user"
                        },
                        {
                            "name" : "layers.create.label.description",
                            "value" : "Description"
                        },
                        {
                            "name" : "toolbar.tooltip.shapes.color",
                            "value" : "<b>Shape Colour Palette</b>. Set colour of selected shape."
                        },
                        {
                            "name" : "toolbar.tooltip.view.map",
                            "value" : "<b>Map View</b>. Toggles the map view and displays the selected risks"
                        },
                        {
                            "name" : "streetview.window.title",
                            "value" : "Street View"
                        },
                        {
                            "name" : "toolbar.tooltip.filemanager",
                            "value" : "<b>File Manager</b>. Manage uploaded files. Download or delete files, view file status and upload history."
                        },
                        {
                            "name" : "policy.error.doesnotexist",
                            "value" : "The policy does not exist or has since been removed"
                        },
                        {
                            "name" : "policysummary.column.zoomto",
                            "value" : "Zoom to this location"
                        },
                        {
                            "name" : "reports.grid.column.name",
                            "value" : "Name"
                        },
                        {
                            "name" : "shape.menu.delete",
                            "value" : "Delete Shape"
                        },
                        {
                            "name" : "notifications.update",
                            "value" : "Update"
                        },
                        {
                            "name" : "demo.risk.detail.stockIn3rdPartyLocationValue",
                            "value" : "Stock In 3rd Party Location Value"
                        },
                        {
                            "name" : "rollup.accept",
                            "value" : "Accept"
                        },
                        {
                            "name" : "label.print",
                            "value" : "Print"
                        },
                        {
                            "name" : "bookoptions.loading.save",
                            "value" : "Saving Rules, please wait"
                        },
                        {
                            "name" : "feedback.message.emptytext",
                            "value" : "Enter Message"
                        },
                        {
                            "name" : "analysis.column.address",
                            "value" : "Address"
                        },
                        {
                            "name" : "layers.window.label.legend",
                            "value" : "Legend"
                        },
                        {
                            "name" : "label.submit",
                            "value" : "Submit"
                        },
                        {
                            "name" : "notifications.tooltip",
                            "value" : "<b>Notifications.</b>"
                        },
                        {
                            "name" : "fileupload.label.drop-here",
                            "value" : "Drag and drop files here to add them"
                        },
                        {
                            "name" : "fileupload.synonyms.error.columncount",
                            "value" : "The uploaded file is not valid. There were [0] column headers provided but we expected [1] column headers. Please correct the file and try again"
                        },
                        {
                            "name" : "reports.edit.label.name",
                            "value" : "Report Name"
                        },
                        {
                            "name" : "label.none",
                            "value" : "None"
                        },
                        {
                            "name" : "feedback.alert.success",
                            "value" : "Thank you. Your feedback was successfully submitted"
                        },
                        {
                            "name" : "demo.risk.detail.hasOnSiteSecurityYesNo",
                            "value" : "Has On Site Security"
                        },
                        {
                            "name" : "feedback.category.feedback",
                            "value" : "Application Feedback"
                        },
                        {
                            "name" : "toolbar.tooltip.shapesMeasure",
                            "value" : "<b>Line</b>. Draw and Measure"
                        },
                        {
                            "name" : "fileupload.synonyms.noselection",
                            "value" : "Choose Match"
                        },
                        {
                            "name" : "demo.risk.detail.lat",
                            "value" : "Latitude"
                        },
                        {
                            "name" : "mail.error",
                            "value" : "Error sending email"
                        },
                        {
                            "name" : "fileupload.label.completedwitherrors",
                            "value" : "Completed With Errors"
                        },
                        {
                            "name" : "menu.label.logout",
                            "value" : "Logout"
                        },
                        {
                            "name" : "user.admin.ok.created",
                            "value" : "User has been created"
                        },
                        {
                            "name" : "accumulationHS.title",
                            "value" : "Top Accumulations:"
                        },
                        {
                            "name" : "shape.label.freehand",
                            "value" : "Line"
                        },
                        {
                            "name" : "fileupload.window.title",
                            "value" : "File Upload"
                        },
                        {
                            "name" : "fileupload.synonyms.label.acceptheaders",
                            "value" : "Accept"
                        },
                        {
                            "name" : "demo.risk.detail.totalBICover",
                            "value" : "Total BI Cover"
                        },
                        {
                            "name" : "demo.risk.detail.fcode",
                            "value" : "FCode"
                        },
                        {
                            "name" : "policy.detail.title",
                            "value" : "Policy Detail"
                        },
                        {
                            "name" : "map.menu.streetview",
                            "value" : "Street View"
                        },
                        {
                            "name" : "autocomplete.search.emptytext",
                            "value" : "Start typing address..."
                        },
                        {
                            "name" : "reports.edit.label.access",
                            "value" : "Access Level"
                        },
                        {
                            "name" : "toolbar.label.welcome",
                            "value" : "Welcome"
                        },
                        {
                            "name" : "fileupload.synonyms.loading.filecomplete",
                            "value" : "File Validated. Completing upload, please wait"
                        },
                        {
                            "name" : "map.max-risks-message",
                            "value" : "Policies will not be displayed at this zoom level, please zoom in"
                        },
                        {
                            "name" : "demo.risk.detail.hasSprinklersYesNo",
                            "value" : "Has Sprinklers"
                        },
                        {
                            "name" : "demo.risk.detail.tsi",
                            "value" : "TSI"
                        },
                        {
                            "name" : "toolbar.tooltip.shapes.modify",
                            "value" : "<b>Shape Vertex Tool</b>. Select to deform shape."
                        },
                        {
                            "name" : "exposure.peril.column.view",
                            "value" : "View"
                        },
                        {
                            "name" : "toolbar.tooltip.shapes.edit",
                            "value" : "<b>Shape Edit Mode</b>. Select the edit mode for modifying the shape structure or location"
                        },
                        {
                            "name" : "fileupload.column.label.export",
                            "value" : "Export"
                        },
                        {
                            "name" : "demo.risk.detail.costOfBusinessInterruption",
                            "value" : "Cost Of Business Interruption"
                        }, {
                            "name" : "demo.risk.detail.gsco",
                            "value" : "GSCO"
                        } ]
            },
            status : 'OK'
        },
        cookies : function(params, query, body, cookies) {
            return cookies;
        }
    }
};
