import { Component } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  created_at: string;
  created_by: string;
  role: string;
  kind: string;
}

@Component({
  selector: 'app-folder-manager',
  templateUrl: './folder-manager.component.html',
  styleUrls: ['./folder-manager.component.scss']
})
export class FolderManagerComponent {

  allColumns = [ 'name', 'created_at', 'created_by', 'role', 'actions' ];

  data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', created_at: 'Wednesday, November 23, 2022', created_by: 'naqib', role: 'admin', kind: 'dir' },
      children: [
        { data: { name: 'project-1.doc', created_at: 'Wednesday, November 23, 2022', created_by: 'naqib', role: 'admin', kind: 'file' } },
        { data: { name: 'project-2.doc', created_at: 'Friday, November 25, 2022', created_by: 'naqib', role: 'admin', kind: 'file' } },
        { data: { name: 'project-4.docx', created_at: 'Monday, November 28, 2022', created_by: 'naqib', role: 'admin', kind: 'file' } },
      ],
    },
    {
      data: { name: 'Other', created_at: 'Wednesday, November 30, 2022', created_by: 'aiman', role: 'admin', kind: 'dir'},
      children: [
        { data: { name: 'backup.bkp', created_at: 'Wednesday, November 30, 2022', created_by: 'aiman', role: 'admin', kind: 'file' } },
        { data: { name: 'secret-note.txt', created_at: 'Wednesday, November 30, 2022', created_by: 'aiman', role: 'admin', kind: 'file' } },
      ],
    },
  ];


}
