import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createDomainValidator(hosts: string[]): ValidatorFn {
  // returns a validator function
  return (control: AbstractControl): ValidationErrors | null => {
    
    if (!control || control.value == null) {
      return null;
    }
    
    const value = control.value?.toLowerCase()
    const match = hosts.some(host => value.includes(`@${host}`))

    return match ? {invalidEmailDomain: true} : null
  }
}
