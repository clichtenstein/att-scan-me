import { Component, OnInit }   from '@angular/core';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector: 'mt-wizard-work' ,
    templateUrl: 'app/work/work.component.html'
})


export class WorkComponent implements OnInit {
    title = 'Please verify the contents of the box:';
    workType: string;
    form: any;
    devices: any[] = [{ value:"box", name:"Box"},
        {value: "hdmiCable", name:"HDMI cable"},
        {value: "LowCable", name:"Low cable" },
        {value: "routerCable", name:"Router cable" }];

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setWork(this.workType);
    }
}