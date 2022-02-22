import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service';

// サービスがアプリケーションの中のどこで使われるかをしめしたもの
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // DI 依存性の注入
  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました');
    // Rx 引数を obserbabl に変換して提供
    return of(MEMBERS);
  }
}
