from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = "user_profile"

urlpatterns = [
    path('me/', views.me, name="me"),
    path('logout/', views.logout, name="userLogout"),
    path('<str:username>', views.userDetail, name="userDetail")
]

urlpatterns = format_suffix_patterns(urlpatterns)
