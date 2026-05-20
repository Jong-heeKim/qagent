배포 작업 순서를 터미널에 표시합니다.

```
배포 작업 순서

1단계: 백엔드 컨테이너 이미지 작성
/deploy-build-image-back
- 백엔드컨테이너이미지작성가이드에 따라 이미지를 작성합니다

2단계: 프론트엔드 컨테이너 이미지 작성
/deploy-build-image-front
- 프론트엔드컨테이너이미지작성가이드에 따라 이미지를 작성합니다

3단계: 백엔드 컨테이너 실행방법 작성
/deploy-run-container-guide-back
- 백엔드컨테이너실행방법가이드에 따라 실행 가이드를 작성합니다
- [실행정보] 섹션에 ACR명 또는 이미지 레지스트리 정보와 VM 정보를 제공합니다

4단계: 프론트엔드 컨테이너 실행 가이드 작성
/deploy-run-container-guide-front
- 프론트엔드컨테이너실행방법가이드에 따라 실행 가이드를 작성합니다
- [실행정보] 섹션에 시스템명, 이미지 레지스트리 정보와 VM 정보를 제공합니다

5단계: 백엔드 k8s 배포 가이드 작성
/deploy-k8s-guide-back
- 백엔드배포가이드에 따라 배포 방법을 작성합니다
- [실행정보] 섹션에 ACR명, k8s명, 네임스페이스, 리소스 정보를 제공합니다

6단계: 프론트엔드 k8s 배포 가이드 작성
/deploy-k8s-guide-front
- 프론트엔드배포가이드에 따라 배포 방법을 작성합니다
- [실행정보] 섹션에 시스템명, ACR명, k8s명, 네임스페이스, 리소스 정보를 제공합니다

7단계: 백엔드 Jenkins CI/CD 가이드 작성 (선택)
/deploy-jenkins-cicd-guide-back
- 백엔드Jenkins파이프라인작성가이드에 따라 CI/CD 가이드를 작성합니다
- [실행정보] 섹션에 이미지 레지스트리, Jenkins 클라우드명, 네임스페이스를 제공합니다

8단계: 프론트엔드 Jenkins CI/CD 가이드 작성 (선택)
/deploy-jenkins-cicd-guide-front
- 프론트엔드Jenkins파이프라인작성가이드에 따라 CI/CD 가이드를 작성합니다
- [실행정보] 섹션에 이미지 레지스트리, Jenkins 클라우드명, 네임스페이스를 제공합니다

9단계: 백엔드 GitHub Actions CI/CD 가이드 작성 (선택)
/deploy-actions-cicd-guide-back
- 백엔드GitHubActions파이프라인작성가이드에 따라 CI/CD 가이드를 작성합니다
- [실행정보] 섹션에 ACR명, 리소스그룹, AKS클러스터, 네임스페이스를 제공합니다

10단계: 프론트엔드 GitHub Actions CI/CD 가이드 작성 (선택)
/deploy-actions-cicd-guide-front
- 프론트엔드GitHubActions파이프라인작성가이드에 따라 CI/CD 가이드를 작성합니다
- [실행정보] 섹션에 시스템명, ACR명, 리소스그룹, AKS클러스터, 네임스페이스를 제공합니다
```
