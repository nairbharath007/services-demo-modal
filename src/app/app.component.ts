import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Student API';
  studentData: any

  showAddStudent = false;
  showUpdateStudent = false;
  showDeleteStudent = false;
  showSearchStudents = false;

  constructor(private studentInfo: StudentService, private router: Router) {
    studentInfo.getAllStudents().subscribe((data) => {
      this.studentData = data;
      console.log(this.studentData)
    })
  }

  updateStudent() {
    this.router.navigateByUrl('/update')
  }
  addStudent() {
    this.router.navigateByUrl('/add')
  }
  deleteStudent() {
    this.router.navigateByUrl('/remove')
  }

  searchStudents() {
    this.router.navigateByUrl('/search'); // Add a route for the search component
  }

  toggleAddStudent() {
    this.showAddStudent = true;
    this.showUpdateStudent = false;
    this.showDeleteStudent = false;
    this.showSearchStudents = false;
  }

  toggleUpdateStudent() {
    this.showAddStudent = false;
    this.showUpdateStudent = true;
    this.showDeleteStudent = false;
    this.showSearchStudents = false;
  }

  toggleDeleteStudent() {
    this.showAddStudent = false;
    this.showUpdateStudent = false;
    this.showDeleteStudent = true;
    this.showSearchStudents = false;
  }

  toggleSearchStudents() {
    this.showAddStudent = false;
    this.showUpdateStudent = false;
    this.showDeleteStudent = false;
    this.showSearchStudents = true;
  }
}
