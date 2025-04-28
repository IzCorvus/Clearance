from django.contrib import admin
from django import forms
from .models import Account

class AccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = '__all__'
        widgets = {
            'password': forms.PasswordInput(render_value=True),
        }

class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'date')  # removed password for security
    form = AccountForm

admin.site.register(Account, AccountAdmin)
