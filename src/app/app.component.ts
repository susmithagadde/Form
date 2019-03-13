import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public panelExpanded = true;

  public panelExpanded1 = true;

  public addClicked = false;

  public saveData = true;

  productForm: FormGroup;
  productForm2: FormGroup;

  get id() {
    return this.productForm.get("id");
  }
  get lod1() {
    return this.productForm.get("lod1");
  }
  get loq1() {
    return this.productForm.get("loq1");
  }
  get tntc1() {
    return this.productForm2.get("tntc1");
  }
  get tftc1() {
    return this.productForm2.get("tftc1");
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      id: new FormControl("DDSKJDSIDDA", [
        Validators.required,
        Validators.pattern("[a-zA-Z]*")
      ]),

      reason: new FormControl("dcss"),
      type1: new FormControl("", Validators.required),
      lod1: new FormControl("", [Validators.required, Validators.min(1)]),
      loq1: new FormControl("", [Validators.required, Validators.min(1)]),

      add: new FormArray([])
    });

    this.productForm2 = new FormGroup({
      reason: new FormControl("dcss"),

      tntc1: new FormControl("", [Validators.required, Validators.min(1)]),
      tftc1: new FormControl("", [Validators.required, Validators.min(1)]),
      radio: new FormControl("", Validators.required),
      add1: new FormArray([])
    });
  }

  addMoc() {
    this.addClicked = true;
    (<FormArray>this.productForm.get("add")).push(new FormControl(""));
  }
  addMoc1() {
    (<FormArray>this.productForm2.get("add1")).push(new FormControl(""));
  }
  deleteMob(index) {
    (<FormArray>this.productForm.get("add")).removeAt(index);
  }
  deleteMob1(index) {
    (<FormArray>this.productForm2.get("add1")).removeAt(index);
  }
  confirm() {
    this.saveData = true;
  }
  edit() {
    this.saveData = false;
  }
}
